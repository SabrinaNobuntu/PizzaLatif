import { createDbAdapter } from "../../infra/database/createDb.adapter";
import { IDatabaseAdapter } from "../../infra/database/IDatabase.adapter";
import TenantConnection from "../entities/tenantConnection.model";
import BaseRepository from "./base.repository";
import { ICategoria, Categoria } from "../entities/categoria.model"; 

export default class CategoriaRepository extends BaseRepository<ICategoria, Categoria>{ 

  constructor(tenantConnection: TenantConnection){ 
    const _adapter : IDatabaseAdapter<ICategoria, Categoria> = createDbAdapter<ICategoria, Categoria>(tenantConnection.models!.get("Categoria"), tenantConnection.databaseType, tenantConnection.connection, Categoria.fromJson);
    super(_adapter, tenantConnection); 
  } 

}
