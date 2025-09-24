import { BaseResourceModel } from "app/shared/models/base-resource.model"; 

export class Garcon extends BaseResourceModel {
    id?: any;
    nomeGarcon?: string;
    comissao?: string;

    static fromJson(jsonData: any): Garcon{ 
        return Object.assign(new Garcon(), jsonData); 
    } 
}

