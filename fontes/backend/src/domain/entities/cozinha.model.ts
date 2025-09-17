import { BaseResourceModel } from "./baseResource.model"  
import { ItemPedido } from "./itemPedido.model"; 


export interface ICozinha extends BaseResourceModel { 
  nomePedido?: string
  dataHora?: number
  statusPedido?: string
  itemPedido?: ItemPedido
  createdAt?: string 
} 
export class Cozinha extends BaseResourceModel implements ICozinha{ 
  nomePedido?: string
  dataHora?: number
  statusPedido?: string
  itemPedido?: ItemPedido
  createdAt?: string 
  constructor(input: ICozinha){
    super();
    this.id = input.id;
    this.nomePedido = input.nomePedido;
    this.dataHora = input.dataHora;
    this.statusPedido = input.statusPedido;
    this.itemPedido = input.itemPedido;
    this.createdAt = input.createdAt; 
 }

  static fromJson(jsonData: any) : Cozinha { 
    return new Cozinha(jsonData);
  } 
}
