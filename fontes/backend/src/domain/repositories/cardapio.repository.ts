import { createDbAdapter } from "../../infra/database/createDb.adapter";
import { IDatabaseAdapter } from "../../infra/database/IDatabase.adapter";
import TenantConnection from "../entities/tenantConnection.model";
import BaseRepository from "./base.repository";
import { ICardapio, Cardapio } from "../entities/cardapio.model"; 

export default class CardapioRepository extends BaseRepository<ICardapio, Cardapio>{ 

  constructor(tenantConnection: TenantConnection){ 
    const _adapter : IDatabaseAdapter<ICardapio, Cardapio> = createDbAdapter<ICardapio, Cardapio>(tenantConnection.models!.get("Cardapio"), tenantConnection.databaseType, tenantConnection.connection, Cardapio.fromJson);
    super(_adapter, tenantConnection); 
  } 

}
