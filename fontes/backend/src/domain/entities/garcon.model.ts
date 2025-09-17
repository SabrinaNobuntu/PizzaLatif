import { BaseResourceModel } from "./baseResource.model"  


export interface IGarcon extends BaseResourceModel { 
  nomeGarcon?: string
  login?: string
  senha?: string
  comissao?: string
  createdAt?: string 
} 
export class Garcon extends BaseResourceModel implements IGarcon{ 
  nomeGarcon?: string
  login?: string
  senha?: string
  comissao?: string
  createdAt?: string 
  constructor(input: IGarcon){
    super();
    this.id = input.id;
    this.nomeGarcon = input.nomeGarcon;
    this.login = input.login;
    this.senha = input.senha;
    this.comissao = input.comissao;
    this.createdAt = input.createdAt; 
 }

  static fromJson(jsonData: any) : Garcon { 
    return new Garcon(jsonData);
  } 
}
