
import { Application } from 'express';
import userRoutes from './user.route';
import tenantRoutes from './tenant.route';
import roleRoutes from './role.route';
import databaseCredentialRoutes from './databaseCredential.route';
import databasePermissionRoutes from './databasePermission.route';
import tenantDirectoryRoutes from './tenantDirectory.route'
import applicationRoutes from './application.route';
import fileRoutes from './file.route';
import fieldFileRoutes from './fieldFile.route';
import authenticationRoutes from './authentication.route';
import dashboardRoutes from './dashboard.route'; 
import consultaRoutes from "./consulta.route"; 
import menuRoutes from "./menu.route";  
import cartaoConsumoRoutes from "./cartaoConsumo.route"; 
import clienteRoutes from "./cliente.route"; 
import cadastroClienteRoutes from "./cadastroCliente.route"; 
import cartaoClienteRoutes from "./cartaoCliente.route"; 
import categoriaRoutes from "./categoria.route"; 
import cozinhaRoutes from "./cozinha.route"; 
import enderecoRoutes from "./endereco.route"; 
import garconRoutes from "./garcon.route"; 
import itemPedidoRoutes from "./itemPedido.route"; 
import cardapioRoutes from "./cardapio.route"; 
import opcionalRoutes from "./opcional.route"; 
import pagamentoRoutes from "./pagamento.route"; 
import pedidoRoutes from "./pedido.route"; 
import produtoRoutes from "./produto.route"; 
import tipoPagamentoRoutes from "./tipoPagamento.route"; 
import entregaRoutes from "./entrega.route"; 
/** 
 * Define as rotas da aplicação 
 * @param app Instância do aplicação Express 
 */ 
export function setRoutes(app: Application) { 

  roleRoutes(app); 
  userRoutes(app); 
    databaseCredentialRoutes(app); (app); 
  tenantRoutes(app); 
  databasePermissionRoutes(app); 
  tenantDirectoryRoutes(app);
  applicationRoutes(app); 
  consultaRoutes(app); 
  fileRoutes(app); 
  fieldFileRoutes(app); 
  authenticationRoutes(app); 
  dashboardRoutes(app); 
  menuRoutes(app); 

  cartaoConsumoRoutes(app); 

  clienteRoutes(app); 

  cadastroClienteRoutes(app); 

  cartaoClienteRoutes(app); 

  categoriaRoutes(app); 

  cozinhaRoutes(app); 

  enderecoRoutes(app); 

  garconRoutes(app); 

  itemPedidoRoutes(app); 

  cardapioRoutes(app); 

  opcionalRoutes(app); 

  pagamentoRoutes(app); 

  pedidoRoutes(app); 

  produtoRoutes(app); 

  tipoPagamentoRoutes(app); 

  entregaRoutes(app); 

}
