import { createDbAdapter } from "../../infra/database/createDb.adapter";
import { IDatabaseAdapter } from "../../infra/database/IDatabase.adapter";
import TenantConnection from "../entities/tenantConnection.model";
import BaseRepository from "./base.repository";
import { IGarcon, Garcon } from "../entities/garcon.model"; 

export default class GarconRepository extends BaseRepository<IGarcon, Garcon>{ 

  constructor(tenantConnection: TenantConnection){ 
    const _adapter : IDatabaseAdapter<IGarcon, Garcon> = createDbAdapter<IGarcon, Garcon>(tenantConnection.models!.get("Garcon"), tenantConnection.databaseType, tenantConnection.connection, Garcon.fromJson);
    super(_adapter, tenantConnection); 
  } 

}
