import { Produto } from "app/modules/produto/shared/produto.model";

import { BaseResourceModel } from "app/shared/models/base-resource.model"; 

export class Cardapio extends BaseResourceModel {
    id?: any;
    nomeMenu?: string;
    descricaoMenu?: string;
    preco?: number;
    produto?: Produto;

    static fromJson(jsonData: any): Cardapio{ 
        return Object.assign(new Cardapio(), jsonData); 
    } 
}

