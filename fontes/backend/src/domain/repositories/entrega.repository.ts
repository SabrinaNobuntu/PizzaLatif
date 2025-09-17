import { createDbAdapter } from "../../infra/database/createDb.adapter";
import { IDatabaseAdapter } from "../../infra/database/IDatabase.adapter";
import TenantConnection from "../entities/tenantConnection.model";
import BaseRepository from "./base.repository";
import { IEntrega, Entrega } from "../entities/entrega.model"; 

export default class EntregaRepository extends BaseRepository<IEntrega, Entrega>{ 

  constructor(tenantConnection: TenantConnection){ 
    const _adapter : IDatabaseAdapter<IEntrega, Entrega> = createDbAdapter<IEntrega, Entrega>(tenantConnection.models!.get("Entrega"), tenantConnection.databaseType, tenantConnection.connection, Entrega.fromJson);
    super(_adapter, tenantConnection); 
  } 

}
