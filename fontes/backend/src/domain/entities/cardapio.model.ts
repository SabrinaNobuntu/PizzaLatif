import { BaseResourceModel } from "./baseResource.model"  
import { Produto } from "./produto.model"; 


export interface ICardapio extends BaseResourceModel { 
  nomeMenu?: string
  descricaoMenu?: string
  preco?: number
  produto?: Produto
  createdAt?: string 
} 
export class Cardapio extends BaseResourceModel implements ICardapio{ 
  nomeMenu?: string
  descricaoMenu?: string
  preco?: number
  produto?: Produto
  createdAt?: string 
  constructor(input: ICardapio){
    super();
    this.id = input.id;
    this.nomeMenu = input.nomeMenu;
    this.descricaoMenu = input.descricaoMenu;
    this.preco = input.preco;
    this.produto = input.produto;
    this.createdAt = input.createdAt; 
 }

  static fromJson(jsonData: any) : Cardapio { 
    return new Cardapio(jsonData);
  } 
}
