import { createDbAdapter } from "../../infra/database/createDb.adapter";
import { IDatabaseAdapter } from "../../infra/database/IDatabase.adapter";
import TenantConnection from "../entities/tenantConnection.model";
import BaseRepository from "./base.repository";
import { ICozinha, Cozinha } from "../entities/cozinha.model"; 

export default class CozinhaRepository extends BaseRepository<ICozinha, Cozinha>{ 

  constructor(tenantConnection: TenantConnection){ 
    const _adapter : IDatabaseAdapter<ICozinha, Cozinha> = createDbAdapter<ICozinha, Cozinha>(tenantConnection.models!.get("Cozinha"), tenantConnection.databaseType, tenantConnection.connection, Cozinha.fromJson);
    super(_adapter, tenantConnection); 
  } 

}
