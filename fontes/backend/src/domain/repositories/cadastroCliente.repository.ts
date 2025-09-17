import { createDbAdapter } from "../../infra/database/createDb.adapter";
import { IDatabaseAdapter } from "../../infra/database/IDatabase.adapter";
import TenantConnection from "../entities/tenantConnection.model";
import BaseRepository from "./base.repository";
import { ICadastroCliente, CadastroCliente } from "../entities/cadastroCliente.model"; 

export default class CadastroClienteRepository extends BaseRepository<ICadastroCliente, CadastroCliente>{ 

  constructor(tenantConnection: TenantConnection){ 
    const _adapter : IDatabaseAdapter<ICadastroCliente, CadastroCliente> = createDbAdapter<ICadastroCliente, CadastroCliente>(tenantConnection.models!.get("CadastroCliente"), tenantConnection.databaseType, tenantConnection.connection, CadastroCliente.fromJson);
    super(_adapter, tenantConnection); 
  } 

}
