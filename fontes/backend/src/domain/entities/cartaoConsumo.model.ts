import { BaseResourceModel } from "./baseResource.model"  
import { Cliente } from "./cliente.model"; 


export interface ICartaoConsumo extends BaseResourceModel { 
  numeroCartao?: number
  clientes?: Cliente
  createdAt?: string 
} 
export class CartaoConsumo extends BaseResourceModel implements ICartaoConsumo{ 
  numeroCartao?: number
  clientes?: Cliente
  createdAt?: string 
  constructor(input: ICartaoConsumo){
    super();
    this.id = input.id;
    this.numeroCartao = input.numeroCartao;
    this.clientes = input.clientes;
    this.createdAt = input.createdAt; 
 }

  static fromJson(jsonData: any) : CartaoConsumo { 
    return new CartaoConsumo(jsonData);
  } 
}
