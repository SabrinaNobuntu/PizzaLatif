import { createDbAdapter } from "../../infra/database/createDb.adapter";
import { IDatabaseAdapter } from "../../infra/database/IDatabase.adapter";
import TenantConnection from "../entities/tenantConnection.model";
import BaseRepository from "./base.repository";
import { IProduto, Produto } from "../entities/produto.model"; 

export default class ProdutoRepository extends BaseRepository<IProduto, Produto>{ 

  constructor(tenantConnection: TenantConnection){ 
    const _adapter : IDatabaseAdapter<IProduto, Produto> = createDbAdapter<IProduto, Produto>(tenantConnection.models!.get("Produto"), tenantConnection.databaseType, tenantConnection.connection, Produto.fromJson);
    super(_adapter, tenantConnection); 
  } 

}
