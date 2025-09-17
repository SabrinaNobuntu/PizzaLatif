import { Pedido } from "app/modules/pedido/shared/pedido.model";
import { Endereco } from "app/modules/endereco/shared/endereco.model";

import { BaseResourceModel } from "app/shared/models/base-resource.model"; 

export class Entrega extends BaseResourceModel {
    id?: any;
    status?: string;
    dataEntregaPrevista?: any;
    horaEntregaPrevista?: string;
    dataEntregaReal?: any;
    horaEntregaReal?: string;
    motoboy?: string;
    observacoes?: string;
    pedido?: Pedido;
    valor?: number;
    endereco?: Endereco;

    static fromJson(jsonData: any): Entrega{ 
        return Object.assign(new Entrega(), jsonData); 
    } 
}

