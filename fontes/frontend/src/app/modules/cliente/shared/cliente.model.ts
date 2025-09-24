import { BaseResourceModel } from "app/shared/models/base-resource.model"; 

export class Cliente extends BaseResourceModel {
    id?: any;
    nome?: string;
    telefone?: string;

    static fromJson(jsonData: any): Cliente{ 
        return Object.assign(new Cliente(), jsonData); 
    } 
}

