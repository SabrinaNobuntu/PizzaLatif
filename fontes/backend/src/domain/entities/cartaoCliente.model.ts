import { BaseResourceModel } from "./baseResource.model"  
import { TipoPagamento } from "./tipoPagamento.model"; 


export interface ICartaoCliente extends BaseResourceModel { 
  numeroCartao?: number
  nomeImpresso?: string
  dataValidade?: any
  cvv?: number
  pedidoCartao?: string
  cpfcnpj?: string
  tipoPagamento?: TipoPagamento
  createdAt?: string 
} 
export class CartaoCliente extends BaseResourceModel implements ICartaoCliente{ 
  numeroCartao?: number
  nomeImpresso?: string
  dataValidade?: any
  cvv?: number
  pedidoCartao?: string
  cpfcnpj?: string
  tipoPagamento?: TipoPagamento
  createdAt?: string 
  constructor(input: ICartaoCliente){
    super();
    this.id = input.id;
    this.numeroCartao = input.numeroCartao;
    this.nomeImpresso = input.nomeImpresso;
    this.dataValidade = input.dataValidade;
    this.cvv = input.cvv;
    this.pedidoCartao = input.pedidoCartao;
    this.cpfcnpj = input.cpfcnpj;
    this.tipoPagamento = input.tipoPagamento;
    this.createdAt = input.createdAt; 
 }

  static fromJson(jsonData: any) : CartaoCliente { 
    return new CartaoCliente(jsonData);
  } 
}
