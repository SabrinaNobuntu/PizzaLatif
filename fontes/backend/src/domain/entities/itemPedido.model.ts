import { BaseResourceModel } from "./baseResource.model"  


export interface IItemPedido extends BaseResourceModel { 
  nomePedido?: string
  descricao?: string
  quantidadePedido?: number
  precoPedido?: number
  numeroMesa?: number
  createdAt?: string 
} 
export class ItemPedido extends BaseResourceModel implements IItemPedido{ 
  nomePedido?: string
  descricao?: string
  quantidadePedido?: number
  precoPedido?: number
  numeroMesa?: number
  createdAt?: string 
  constructor(input: IItemPedido){
    super();
    this.id = input.id;
    this.nomePedido = input.nomePedido;
    this.descricao = input.descricao;
    this.quantidadePedido = input.quantidadePedido;
    this.precoPedido = input.precoPedido;
    this.numeroMesa = input.numeroMesa;
    this.createdAt = input.createdAt; 
 }

  static fromJson(jsonData: any) : ItemPedido { 
    return new ItemPedido(jsonData);
  } 
}
