import { BaseResourceModel } from "./baseResource.model"  
import { Pedido } from "./pedido.model"; 
import { Endereco } from "./endereco.model"; 


export interface IEntrega extends BaseResourceModel { 
  status?: string
  dataEntregaPrevista?: any
  horaEntregaPrevista?: string
  dataEntregaReal?: any
  horaEntregaReal?: string
  motoboy?: string
  observacoes?: string
  pedido?: Pedido
  valor?: number
  endereco?: Endereco
  createdAt?: string 
} 
export class Entrega extends BaseResourceModel implements IEntrega{ 
  status?: string
  dataEntregaPrevista?: any
  horaEntregaPrevista?: string
  dataEntregaReal?: any
  horaEntregaReal?: string
  motoboy?: string
  observacoes?: string
  pedido?: Pedido
  valor?: number
  endereco?: Endereco
  createdAt?: string 
  constructor(input: IEntrega){
    super();
    this.id = input.id;
    this.status = input.status;
    this.dataEntregaPrevista = input.dataEntregaPrevista;
    this.horaEntregaPrevista = input.horaEntregaPrevista;
    this.dataEntregaReal = input.dataEntregaReal;
    this.horaEntregaReal = input.horaEntregaReal;
    this.motoboy = input.motoboy;
    this.observacoes = input.observacoes;
    this.pedido = input.pedido;
    this.valor = input.valor;
    this.endereco = input.endereco;
    this.createdAt = input.createdAt; 
 }

  static fromJson(jsonData: any) : Entrega { 
    return new Entrega(jsonData);
  } 
}
