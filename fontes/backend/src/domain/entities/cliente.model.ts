import { BaseResourceModel } from "./baseResource.model"  


export interface ICliente extends BaseResourceModel { 
  nome?: string
  telefone?: number
  createdAt?: string 
} 
export class Cliente extends BaseResourceModel implements ICliente{ 
  nome?: string
  telefone?: number
  createdAt?: string 
  constructor(input: ICliente){
    super();
    this.id = input.id;
    this.nome = input.nome;
    this.telefone = input.telefone;
    this.createdAt = input.createdAt; 
 }

  static fromJson(jsonData: any) : Cliente { 
    return new Cliente(jsonData);
  } 
}
