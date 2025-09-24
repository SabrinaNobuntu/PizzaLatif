import { BaseResourceModel } from "./baseResource.model"  


export interface IGarcon extends BaseResourceModel { 
  nomeGarcon?: string
  comissao?: string
  createdAt?: string 
} 
export class Garcon extends BaseResourceModel implements IGarcon{ 
  nomeGarcon?: string
  comissao?: string
  createdAt?: string 
  constructor(input: IGarcon){
    super();
    this.id = input.id;
    this.nomeGarcon = input.nomeGarcon;
    this.comissao = input.comissao;
    this.createdAt = input.createdAt; 
 }

  static fromJson(jsonData: any) : Garcon { 
    return new Garcon(jsonData);
  } 
}
