// .github/scripts/update-foreign-keys.ts
import { Project, PropertyDeclaration } from "ts-morph";
import { faker } from "@faker-js/faker";
import fs from "fs";
import path from "path";

const TS_CONFIG = "fontes/backend/tsconfig.json"; // ajuste se necessário
const DATA_DIR = path.join(process.cwd(), "test-data");

// garante que a pasta test-data exista
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const project = new Project({ tsConfigFilePath: TS_CONFIG });
const allFiles = project.getSourceFiles();

// Filtra apenas os models (ignora controllers/repos)
const modelFiles = allFiles.filter(
  f =>
    !f.getBaseName().endsWith("Controller.ts") &&
    !f.getBaseName().endsWith("Repository.ts")
);

// carrega JSON existente para um model (ou array vazio se não existir)
function loadJson(modelName: string): any[] {
  const p = path.join(DATA_DIR, `${modelName}.json`);
  if (!fs.existsSync(p)) return [];
  try {
    return JSON.parse(fs.readFileSync(p, "utf8"));
  } catch (e) {
    console.warn(`Erro lendo ${p}:`, e);
    return [];
  }
}

// salva JSON (só IDs → sem risco de circularidade)
function saveJson(modelName: string, data: any[]) {
  const p = path.join(DATA_DIR, `${modelName}.json`);
  fs.writeFileSync(p, JSON.stringify(data, null, 2), "utf8");
}

// detecta array no tipo
function isArrayTypeText(t: string) {
  return /\[\]$/.test(t) || /^Array<.*>$/.test(t);
}

async function main() {
  // mapa className -> ClassDeclaration
  const classes = modelFiles.flatMap(f => f.getClasses());
  const classMap = new Map<string, any>();
  classes.forEach(c => {
    const n = c.getName();
    if (n) classMap.set(n, c);
  });

  // preload dos JSONs existentes
  const jsonCache: Record<string, any[]> = {};
  for (const name of classMap.keys()) {
    jsonCache[name] = loadJson(name);
  }

  // garante que cada model tenha pelo menos registros base (id)
  for (const [className, cls] of classMap.entries()) {
    let records = jsonCache[className] ?? [];
    if (!records || records.length === 0) {
      const props = cls.getProperties();
      const n = 3;
      records = [];
      for (let i = 0; i < n; i++) {
        const rec: Record<string, any> = {};
        props.forEach((p: PropertyDeclaration) => {
          const pn = p.getName();
          if (/^id$/i.test(pn)) rec[pn] = i + 1;
        });
        records.push(rec);
      }
      jsonCache[className] = records;
      saveJson(className, records);
      console.log(
        `⚠️  ${className}.json não existia — criei ${records.length} placeholders (somente id).`
      );
    }
  }

  // atualiza FKs somente com IDs
  for (const [className, cls] of classMap.entries()) {
    const records = jsonCache[className];
    if (!records || records.length === 0) continue;

    for (const rec of records) {
      for (const prop of cls.getProperties()) {
        const propName = prop.getName();
        const type = prop.getType();
        const typeText = type.getText();
        let targetName = type.getSymbol()?.getName();

        // fallback por texto (ex: "TipoPagamento | undefined")
        if (!targetName) {
          for (const cand of Object.keys(jsonCache)) {
            if (typeText.includes(cand)) {
              targetName = cand;
              break;
            }
          }
        }
        if (!targetName) continue; // não é FK

        const pool = jsonCache[targetName] ?? [];
        if (!pool || pool.length === 0) continue;

        const isArray = isArrayTypeText(typeText);
        if (isArray) {
          // gera entre 1 e 3 ids relacionados
          const count = Math.min(pool.length, 1 + Math.floor(Math.random() * 3));
          const chosen = Array.from({ length: count }, () =>
            faker.helpers.arrayElement(pool)
          );
          rec[`${propName}Ids`] = chosen.map(
            ch => ch?.id ?? ch?._id ?? faker.number.int()
          );
        } else {
          const chosen = faker.helpers.arrayElement(pool);
          const fk = chosen?.id ?? chosen?._id ?? faker.number.int();
          rec[`${propName}Id`] = fk;
        }
      }
    }

    saveJson(className, records);
    console.log(`✅ Atualizado ${className}.json (${records.length} registros)`);
  }

  console.log("\n🎉 Atualização de chaves estrangeiras concluída (somente IDs).");
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
