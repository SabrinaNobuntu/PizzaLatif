import { createDbAdapter } from "../../infra/database/createDb.adapter";
import { IDatabaseAdapter } from "../../infra/database/IDatabase.adapter";
import TenantConnection from "../entities/tenantConnection.model";
import BaseRepository from "./base.repository";
import { IOpcional, Opcional } from "../entities/opcional.model"; 

export default class OpcionalRepository extends BaseRepository<IOpcional, Opcional>{ 

  constructor(tenantConnection: TenantConnection){ 
    const _adapter : IDatabaseAdapter<IOpcional, Opcional> = createDbAdapter<IOpcional, Opcional>(tenantConnection.models!.get("Opcional"), tenantConnection.databaseType, tenantConnection.connection, Opcional.fromJson);
    super(_adapter, tenantConnection); 
  } 

}
