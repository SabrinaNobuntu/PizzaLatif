import { Project, PropertyDeclaration } from "ts-morph";
import { faker } from "@faker-js/faker";
import fs from "fs";
import path from "path";

// Funções utilitárias
const generateCPF = () =>
  Array.from({ length: 11 }, () => faker.string.numeric(1))
    .join("")
    .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

const generateCNPJ = () =>
  Array.from({ length: 14 }, () => faker.string.numeric(1))
    .join("")
    .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");

const generatePhone = () =>
  Array.from({ length: 10 }, () => faker.string.numeric(1))
    .join("")
    .replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");

const generateCellphone = () =>
  Array.from({ length: 11 }, () => faker.string.numeric(1))
    .join("")
    .replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, "($1) $2$3-$4");

const formatDate = (date: Date) => date.toISOString().split("T")[0]; // YYYY-MM-DD
const formatTime = (date: Date) => date.toTimeString().split(" ")[0]; // HH:mm:ss

// Inicializa projeto TS-Morph
const project = new Project({ tsConfigFilePath: "fontes/backend/tsconfig.json" });
const allFiles = project.getSourceFiles();
const modelFiles = allFiles.filter(
  (f) =>
    !f.getBaseName().endsWith("Controller.ts") &&
    !f.getBaseName().endsWith("Repository.ts")
);

interface TestData {
  [key: string]: any;
}

const outputDir = path.join(process.cwd(), "test-data");
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const generatedData: Record<string, TestData[]> = {};

// Função para gerar dados de um model
const generateModelData = (cls: any, numberOfRecords = 3) => {
  const className = cls.getName();
  if (!className) return [];
  const props = cls.getProperties();

  // Ignora modelos sem campos (apenas id)
  if (props.length === 0) return [];

  const records: TestData[] = [];

  for (let i = 0; i < numberOfRecords; i++) {
    const testData: TestData = {};
    testData["id"] = i + 1;

    props.forEach((prop: PropertyDeclaration) => {
      const name: string = prop.getName();
      const type: string = prop.getType().getText().toLowerCase();
      const typeName: string | undefined = prop.getType().getSymbol()?.getName();

      if (name.toLowerCase() === "id") return;

      // Campos brasileiros comuns
      if (/email/i.test(name)) testData[name] = faker.internet.email();
      else if (/cep/i.test(name)) testData[name] = faker.location.zipCode("#####-###");
      else if (/senha|password/i.test(name)) testData[name] = faker.internet.password();
      else if (/cpf$/i.test(name)) testData[name] = generateCPF();
      else if (/cnpj$/i.test(name)) testData[name] = generateCNPJ();
      else if (/cpfcnpj/i.test(name)) testData[name] = Math.random() > 0.5 ? generateCPF() : generateCNPJ();
      else if (/telefonecelular|celular/i.test(name)) testData[name] = generateCellphone();
      else if (/telefone|phone/i.test(name)) testData[name] = generatePhone();
      else if (/date|createdat|updatedat/i.test(name)) testData[name] = faker.date.recent().toISOString();
      else if (/hora|time/i.test(name)) testData[name] = formatTime(faker.date.recent());
      else if (/data/i.test(name) && !/hora/i.test(name)) testData[name] = formatDate(faker.date.recent());

      // Chave estrangeira → só ID
      else if (typeName && generatedData[typeName]?.length) {
        const selected = faker.helpers.arrayElement(generatedData[typeName]);
        testData[name + "Id"] = selected.id;
      }

      // Tipos string, number, boolean
      else if (/string/.test(type)) {
        const stringGenerators: (() => any)[] = [
          () => faker.person.fullName(),
          () => faker.commerce.productName(),
          () => faker.food.dish(),
          () => faker.location.city()
        ];
        testData[name] = faker.helpers.arrayElement(stringGenerators)();
      } else if (/number/.test(type)) testData[name] = faker.number.int({ min: 1, max: 1000 });
      else if (/double|float/.test(type)) testData[name] = faker.number.float({ min: 0, max: 1000, fractionDigits: 2 });
      else if (/boolean/.test(type)) testData[name] = faker.datatype.boolean();
      else testData[name] = null;
    });

    // Campos de confirmação
    props.forEach((prop: PropertyDeclaration) => {
      const name: string = prop.getName();
      if (/confirma/i.test(name)) {
        const originalFieldPart = name.replace(/confirma/i, "");
        const keyOriginal = Object.keys(testData).find((k) =>
          k.toLowerCase().includes(originalFieldPart.toLowerCase())
        );
        testData[name] = keyOriginal ? testData[keyOriginal] : faker.lorem.word();
      }
    });

    records.push(testData);
  }

  generatedData[className] = records;

  const filePath = path.join(outputDir, `${className}.json`);
  fs.writeFileSync(filePath, JSON.stringify(records, null, 2), "utf-8");
  console.log(`✅ Dados da classe '${className}' salvos em ${filePath}`);

  return records;
};

// Cria mapa de dependências
const modelDependencies: Record<string, string[]> = {};
modelFiles.forEach((file) => {
  file.getClasses().forEach((cls) => {
    const className = cls.getName();
    if (!className) return;
    const props = cls.getProperties();
    modelDependencies[className] = props
      .map((p: PropertyDeclaration) => p.getType().getSymbol()?.getName())
      .filter(Boolean) as string[];
  });
});

// Ordena modelos topologicamente
const sortedModels: string[] = [];
const visited: Record<string, boolean> = {};
function visit(model: string) {
  if (visited[model]) return;
  visited[model] = true;
  (modelDependencies[model] || []).forEach((dep) => {
    if (dep && !visited[dep] && modelDependencies[dep]) visit(dep);
  });
  sortedModels.push(model);
}
Object.keys(modelDependencies).forEach(visit);

// Gera dados na ordem correta
sortedModels.forEach((modelName) => {
  const cls = modelFiles.flatMap((f) => f.getClasses()).find((c) => c.getName() === modelName);
  if (cls) generateModelData(cls);
});

console.log("\n🎉 Todos os dados de teste dos models foram gerados com sucesso!");
