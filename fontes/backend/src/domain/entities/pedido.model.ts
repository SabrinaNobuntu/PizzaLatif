import { BaseResourceModel } from "./baseResource.model"  
import { Pagamento } from "./pagamento.model"; 
import { Garcon } from "./garcon.model"; 
import { ItemPedido } from "./itemPedido.model"; 
import { CartaoConsumo } from "./cartaoConsumo.model"; 


export interface IPedido extends BaseResourceModel { 
  pedidoCancelado?: string
  dataPedido?: any
  horaPedido?: string
  pagamento?: Pagamento
  garcon?: Garcon
  itemPedido?: ItemPedido
  cartaoConsumo?: CartaoConsumo
  createdAt?: string 
} 
export class Pedido extends BaseResourceModel implements IPedido{ 
  pedidoCancelado?: string
  dataPedido?: any
  horaPedido?: string
  pagamento?: Pagamento
  garcon?: Garcon
  itemPedido?: ItemPedido
  cartaoConsumo?: CartaoConsumo
  createdAt?: string 
  constructor(input: IPedido){
    super();
    this.id = input.id;
    this.pedidoCancelado = input.pedidoCancelado;
    this.dataPedido = input.dataPedido;
    this.horaPedido = input.horaPedido;
    this.pagamento = input.pagamento;
    this.garcon = input.garcon;
    this.itemPedido = input.itemPedido;
    this.cartaoConsumo = input.cartaoConsumo;
    this.createdAt = input.createdAt; 
 }

  static fromJson(jsonData: any) : Pedido { 
    return new Pedido(jsonData);
  } 
}
