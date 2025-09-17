import { createDbAdapter } from "../../infra/database/createDb.adapter";
import { IDatabaseAdapter } from "../../infra/database/IDatabase.adapter";
import TenantConnection from "../entities/tenantConnection.model";
import BaseRepository from "./base.repository";
import { ITipoPagamento, TipoPagamento } from "../entities/tipoPagamento.model"; 

export default class TipoPagamentoRepository extends BaseRepository<ITipoPagamento, TipoPagamento>{ 

  constructor(tenantConnection: TenantConnection){ 
    const _adapter : IDatabaseAdapter<ITipoPagamento, TipoPagamento> = createDbAdapter<ITipoPagamento, TipoPagamento>(tenantConnection.models!.get("TipoPagamento"), tenantConnection.databaseType, tenantConnection.connection, TipoPagamento.fromJson);
    super(_adapter, tenantConnection); 
  } 

}
