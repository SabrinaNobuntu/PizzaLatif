import { createDbAdapter } from "../../infra/database/createDb.adapter";
import { IDatabaseAdapter } from "../../infra/database/IDatabase.adapter";
import TenantConnection from "../entities/tenantConnection.model";
import BaseRepository from "./base.repository";
import { ICliente, Cliente } from "../entities/cliente.model"; 

export default class ClienteRepository extends BaseRepository<ICliente, Cliente>{ 

  constructor(tenantConnection: TenantConnection){ 
    const _adapter : IDatabaseAdapter<ICliente, Cliente> = createDbAdapter<ICliente, Cliente>(tenantConnection.models!.get("Cliente"), tenantConnection.databaseType, tenantConnection.connection, Cliente.fromJson);
    super(_adapter, tenantConnection); 
  } 

}
