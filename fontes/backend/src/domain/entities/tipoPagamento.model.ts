import { BaseResourceModel } from "./baseResource.model"  


export interface ITipoPagamento extends BaseResourceModel { 
  tipoPagamento?: string
  createdAt?: string 
} 
export class TipoPagamento extends BaseResourceModel implements ITipoPagamento{ 
  tipoPagamento?: string
  createdAt?: string 
  constructor(input: ITipoPagamento){
    super();
    this.id = input.id;
    this.tipoPagamento = input.tipoPagamento;
    this.createdAt = input.createdAt; 
 }

  static fromJson(jsonData: any) : TipoPagamento { 
    return new TipoPagamento(jsonData);
  } 
}
