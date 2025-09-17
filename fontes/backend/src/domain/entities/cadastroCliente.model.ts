import { BaseResourceModel } from "./baseResource.model"  


export interface ICadastroCliente extends BaseResourceModel { 
  nomeCliente?: string
  sobrenomeCliente?: string
  emailCliente?: string
  emailclienteConfirma?: string
  senhaCliente?: string
  senhaclienteConfirma?: string
  createdAt?: string 
} 
export class CadastroCliente extends BaseResourceModel implements ICadastroCliente{ 
  nomeCliente?: string
  sobrenomeCliente?: string
  emailCliente?: string
  emailclienteConfirma?: string
  senhaCliente?: string
  senhaclienteConfirma?: string
  createdAt?: string 
  constructor(input: ICadastroCliente){
    super();
    this.id = input.id;
    this.nomeCliente = input.nomeCliente;
    this.sobrenomeCliente = input.sobrenomeCliente;
    this.emailCliente = input.emailCliente;
    this.emailclienteConfirma = input.emailclienteConfirma;
    this.senhaCliente = input.senhaCliente;
    this.senhaclienteConfirma = input.senhaclienteConfirma;
    this.createdAt = input.createdAt; 
 }

  static fromJson(jsonData: any) : CadastroCliente { 
    return new CadastroCliente(jsonData);
  } 
}
