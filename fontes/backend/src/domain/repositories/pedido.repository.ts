import { createDbAdapter } from "../../infra/database/createDb.adapter";
import { IDatabaseAdapter } from "../../infra/database/IDatabase.adapter";
import TenantConnection from "../entities/tenantConnection.model";
import BaseRepository from "./base.repository";
import { IPedido, Pedido } from "../entities/pedido.model"; 

export default class PedidoRepository extends BaseRepository<IPedido, Pedido>{ 

  constructor(tenantConnection: TenantConnection){ 
    const _adapter : IDatabaseAdapter<IPedido, Pedido> = createDbAdapter<IPedido, Pedido>(tenantConnection.models!.get("Pedido"), tenantConnection.databaseType, tenantConnection.connection, Pedido.fromJson);
    super(_adapter, tenantConnection); 
  } 

}
