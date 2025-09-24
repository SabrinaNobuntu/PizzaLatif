import { BaseResourceModel } from "./baseResource.model"  
import { CadastroCliente } from "./cadastroCliente.model"; 


export interface IEndereco extends BaseResourceModel { 
  rua?: string
  bairro?: string
  cidade?: string
  numeroMoradia?: number
  cep?: string
  complemento?: string
  cadastroCliente?: CadastroCliente
  createdAt?: string 
} 
export class Endereco extends BaseResourceModel implements IEndereco{ 
  rua?: string
  bairro?: string
  cidade?: string
  numeroMoradia?: number
  cep?: string
  complemento?: string
  cadastroCliente?: CadastroCliente
  createdAt?: string 
  constructor(input: IEndereco){
    super();
    this.id = input.id;
    this.rua = input.rua;
    this.bairro = input.bairro;
    this.cidade = input.cidade;
    this.numeroMoradia = input.numeroMoradia;
    this.cep = input.cep;
    this.complemento = input.complemento;
    this.cadastroCliente = input.cadastroCliente;
    this.createdAt = input.createdAt; 
 }

  static fromJson(jsonData: any) : Endereco { 
    return new Endereco(jsonData);
  } 
}
