import { BaseResourceModel } from "./baseResource.model"  


export interface ICategoria extends BaseResourceModel { 
  nomeCategoria?: string
  usaopcoesTamanho?: string
  usaopcoesBorda?: string
  setor?: string
  createdAt?: string 
} 
export class Categoria extends BaseResourceModel implements ICategoria{ 
  nomeCategoria?: string
  usaopcoesTamanho?: string
  usaopcoesBorda?: string
  setor?: string
  createdAt?: string 
  constructor(input: ICategoria){
    super();
    this.id = input.id;
    this.nomeCategoria = input.nomeCategoria;
    this.usaopcoesTamanho = input.usaopcoesTamanho;
    this.usaopcoesBorda = input.usaopcoesBorda;
    this.setor = input.setor;
    this.createdAt = input.createdAt; 
 }

  static fromJson(jsonData: any) : Categoria { 
    return new Categoria(jsonData);
  } 
}
