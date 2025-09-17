import { createDbAdapter } from "../../infra/database/createDb.adapter";
import { IDatabaseAdapter } from "../../infra/database/IDatabase.adapter";
import TenantConnection from "../entities/tenantConnection.model";
import BaseRepository from "./base.repository";
import { IEndereco, Endereco } from "../entities/endereco.model"; 

export default class EnderecoRepository extends BaseRepository<IEndereco, Endereco>{ 

  constructor(tenantConnection: TenantConnection){ 
    const _adapter : IDatabaseAdapter<IEndereco, Endereco> = createDbAdapter<IEndereco, Endereco>(tenantConnection.models!.get("Endereco"), tenantConnection.databaseType, tenantConnection.connection, Endereco.fromJson);
    super(_adapter, tenantConnection); 
  } 

}
