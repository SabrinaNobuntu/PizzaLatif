import { createDbAdapter } from "../../infra/database/createDb.adapter";
import { IDatabaseAdapter } from "../../infra/database/IDatabase.adapter";
import TenantConnection from "../entities/tenantConnection.model";
import BaseRepository from "./base.repository";
import { ICartaoConsumo, CartaoConsumo } from "../entities/cartaoConsumo.model"; 

export default class CartaoConsumoRepository extends BaseRepository<ICartaoConsumo, CartaoConsumo>{ 

  constructor(tenantConnection: TenantConnection){ 
    const _adapter : IDatabaseAdapter<ICartaoConsumo, CartaoConsumo> = createDbAdapter<ICartaoConsumo, CartaoConsumo>(tenantConnection.models!.get("CartaoConsumo"), tenantConnection.databaseType, tenantConnection.connection, CartaoConsumo.fromJson);
    super(_adapter, tenantConnection); 
  } 

}
