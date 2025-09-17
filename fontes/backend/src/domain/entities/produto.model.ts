import { BaseResourceModel } from "./baseResource.model"  
import { Categoria } from "./categoria.model"; 
import { Opcional } from "./opcional.model"; 


export interface IProduto extends BaseResourceModel { 
  nomeProduto?: string
  codigo?: number
  descricaoProduto?: string
  precoProduto?: number
  imagem?: string
  categoria?: Categoria
  opcional?: Opcional
  createdAt?: string 
} 
export class Produto extends BaseResourceModel implements IProduto{ 
  nomeProduto?: string
  codigo?: number
  descricaoProduto?: string
  precoProduto?: number
  imagem?: string
  categoria?: Categoria
  opcional?: Opcional
  createdAt?: string 
  constructor(input: IProduto){
    super();
    this.id = input.id;
    this.nomeProduto = input.nomeProduto;
    this.codigo = input.codigo;
    this.descricaoProduto = input.descricaoProduto;
    this.precoProduto = input.precoProduto;
    this.imagem = input.imagem;
    this.categoria = input.categoria;
    this.opcional = input.opcional;
    this.createdAt = input.createdAt; 
 }

  static fromJson(jsonData: any) : Produto { 
    return new Produto(jsonData);
  } 
}
