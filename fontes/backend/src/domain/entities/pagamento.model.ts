import { BaseResourceModel } from "./baseResource.model"  
import { TipoPagamento } from "./tipoPagamento.model"; 


export interface IPagamento extends BaseResourceModel { 
  valorPagamento?: number
  datahoraPagamento?: number
  tipoPagamento?: TipoPagamento
  createdAt?: string 
} 
export class Pagamento extends BaseResourceModel implements IPagamento{ 
  valorPagamento?: number
  datahoraPagamento?: number
  tipoPagamento?: TipoPagamento
  createdAt?: string 
  constructor(input: IPagamento){
    super();
    this.id = input.id;
    this.valorPagamento = input.valorPagamento;
    this.datahoraPagamento = input.datahoraPagamento;
    this.tipoPagamento = input.tipoPagamento;
    this.createdAt = input.createdAt; 
 }

  static fromJson(jsonData: any) : Pagamento { 
    return new Pagamento(jsonData);
  } 
}
