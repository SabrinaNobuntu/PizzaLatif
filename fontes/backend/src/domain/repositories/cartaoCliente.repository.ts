import { createDbAdapter } from "../../infra/database/createDb.adapter";
import { IDatabaseAdapter } from "../../infra/database/IDatabase.adapter";
import TenantConnection from "../entities/tenantConnection.model";
import BaseRepository from "./base.repository";
import { ICartaoCliente, CartaoCliente } from "../entities/cartaoCliente.model"; 

export default class CartaoClienteRepository extends BaseRepository<ICartaoCliente, CartaoCliente>{ 

  constructor(tenantConnection: TenantConnection){ 
    const _adapter : IDatabaseAdapter<ICartaoCliente, CartaoCliente> = createDbAdapter<ICartaoCliente, CartaoCliente>(tenantConnection.models!.get("CartaoCliente"), tenantConnection.databaseType, tenantConnection.connection, CartaoCliente.fromJson);
    super(_adapter, tenantConnection); 
  } 

}
