import { createDbAdapter } from "../../infra/database/createDb.adapter";
import { IDatabaseAdapter } from "../../infra/database/IDatabase.adapter";
import TenantConnection from "../entities/tenantConnection.model";
import BaseRepository from "./base.repository";
import { IPagamento, Pagamento } from "../entities/pagamento.model"; 

export default class PagamentoRepository extends BaseRepository<IPagamento, Pagamento>{ 

  constructor(tenantConnection: TenantConnection){ 
    const _adapter : IDatabaseAdapter<IPagamento, Pagamento> = createDbAdapter<IPagamento, Pagamento>(tenantConnection.models!.get("Pagamento"), tenantConnection.databaseType, tenantConnection.connection, Pagamento.fromJson);
    super(_adapter, tenantConnection); 
  } 

}
