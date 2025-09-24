import { TipoPagamento } from "app/modules/tipo-pagamento/shared/tipo-pagamento.model";

import { BaseResourceModel } from "app/shared/models/base-resource.model"; 

export class Pagamento extends BaseResourceModel {
    id?: any;
    valorPagamento?: number;
    dataPagamento?: any;
    horaPagamento?: string;
    tipoPagamento?: TipoPagamento;

    static fromJson(jsonData: any): Pagamento{ 
        return Object.assign(new Pagamento(), jsonData); 
    } 
}

