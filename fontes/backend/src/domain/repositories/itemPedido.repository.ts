import { createDbAdapter } from "../../infra/database/createDb.adapter";
import { IDatabaseAdapter } from "../../infra/database/IDatabase.adapter";
import TenantConnection from "../entities/tenantConnection.model";
import BaseRepository from "./base.repository";
import { IItemPedido, ItemPedido } from "../entities/itemPedido.model"; 

export default class ItemPedidoRepository extends BaseRepository<IItemPedido, ItemPedido>{ 

  constructor(tenantConnection: TenantConnection){ 
    const _adapter : IDatabaseAdapter<IItemPedido, ItemPedido> = createDbAdapter<IItemPedido, ItemPedido>(tenantConnection.models!.get("ItemPedido"), tenantConnection.databaseType, tenantConnection.connection, ItemPedido.fromJson);
    super(_adapter, tenantConnection); 
  } 

}
