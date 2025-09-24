import { BaseResourceModel } from "./baseResource.model"  
import { ItemPedido } from "./itemPedido.model"; 


export interface ICozinha extends BaseResourceModel { 
  nomePedido?: string
  data?: any
  hora?: string
  statusPedido?: string
  itemPedido?: ItemPedido
  createdAt?: string 
} 
export class Cozinha extends BaseResourceModel implements ICozinha{ 
  nomePedido?: string
  data?: any
  hora?: string
  statusPedido?: string
  itemPedido?: ItemPedido
  createdAt?: string 
  constructor(input: ICozinha){
    super();
    this.id = input.id;
    this.nomePedido = input.nomePedido;
    this.data = input.data;
    this.hora = input.hora;
    this.statusPedido = input.statusPedido;
    this.itemPedido = input.itemPedido;
    this.createdAt = input.createdAt; 
 }

  static fromJson(jsonData: any) : Cozinha { 
    return new Cozinha(jsonData);
  } 
}
