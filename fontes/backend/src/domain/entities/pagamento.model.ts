import { BaseResourceModel } from "./baseResource.model"  
import { TipoPagamento } from "./tipoPagamento.model"; 


export interface IPagamento extends BaseResourceModel { 
  valorPagamento?: number
  dataPagamento?: any
  horaPagamento?: string
  tipoPagamento?: TipoPagamento
  createdAt?: string 
} 
export class Pagamento extends BaseResourceModel implements IPagamento{ 
  valorPagamento?: number
  dataPagamento?: any
  horaPagamento?: string
  tipoPagamento?: TipoPagamento
  createdAt?: string 
  constructor(input: IPagamento){
    super();
    this.id = input.id;
    this.valorPagamento = input.valorPagamento;
    this.dataPagamento = input.dataPagamento;
    this.horaPagamento = input.horaPagamento;
    this.tipoPagamento = input.tipoPagamento;
    this.createdAt = input.createdAt; 
 }

  static fromJson(jsonData: any) : Pagamento { 
    return new Pagamento(jsonData);
  } 
}
