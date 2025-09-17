import { BaseResourceModel } from "./baseResource.model"  
import { Produto } from "./produto.model"; 
import { Categoria } from "./categoria.model"; 


export interface IOpcional extends BaseResourceModel { 
  nomeOpcional?: string
  tipoOpcional?: string
  maximaOpcionais?: number
  produto?: Produto
  categoria?: Categoria
  createdAt?: string 
} 
export class Opcional extends BaseResourceModel implements IOpcional{ 
  nomeOpcional?: string
  tipoOpcional?: string
  maximaOpcionais?: number
  produto?: Produto
  categoria?: Categoria
  createdAt?: string 
  constructor(input: IOpcional){
    super();
    this.id = input.id;
    this.nomeOpcional = input.nomeOpcional;
    this.tipoOpcional = input.tipoOpcional;
    this.maximaOpcionais = input.maximaOpcionais;
    this.produto = input.produto;
    this.categoria = input.categoria;
    this.createdAt = input.createdAt; 
 }

  static fromJson(jsonData: any) : Opcional { 
    return new Opcional(jsonData);
  } 
}
