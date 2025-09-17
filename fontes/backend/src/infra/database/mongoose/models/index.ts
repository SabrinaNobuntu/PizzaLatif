import { Connection, Mongoose } from "mongoose";  
import userModel from "./user.model";
import roleModel from "./role.model";
import functionSystemModel from "./functionSystem.model";
import functionSystemRoleModel from "./functionSystemRole.model";
import userRoleModel from "./userRole.model";
import componentStructureModel from "./componentStructure.model";
import componentStructureRoleModel from "./componentStructureRole.model";
import verificationEmailModel from "./verificationEmail.model";
import TenantConnection from "../../../../domain/entities/tenantConnection.model";
import counterModel from "./counter.model";

import cartaoConsumoModel from "./cartaoConsumo.model"; 
import clienteModel from "./cliente.model"; 
import cadastroClienteModel from "./cadastroCliente.model"; 
import cartaoClienteModel from "./cartaoCliente.model"; 
import categoriaModel from "./categoria.model"; 
import cozinhaModel from "./cozinha.model"; 
import enderecoModel from "./endereco.model"; 
import garconModel from "./garcon.model"; 
import itemPedidoModel from "./itemPedido.model"; 
import cardapioModel from "./cardapio.model"; 
import opcionalModel from "./opcional.model"; 
import pagamentoModel from "./pagamento.model"; 
import pedidoModel from "./pedido.model"; 
import produtoModel from "./produto.model"; 
import tipoPagamentoModel from "./tipoPagamento.model"; 
import entregaModel from "./entrega.model"; 

export default async function setModels(tenantConnection: TenantConnection) { 
  const mongooseConnection = tenantConnection.connection; 
  if(mongooseConnection instanceof Connection == false){ 
    throw new Error("Instance of database connection is incompatible with setModels function on mongoose."); 
  } 

  const user = userModel(mongooseConnection); 
  const role = roleModel(mongooseConnection); 
  const userRole = userRoleModel(mongooseConnection); 
  const functionSystem = functionSystemModel(mongooseConnection); 
  const functionSystemRole = functionSystemRoleModel(mongooseConnection); 
  const componentStructure = componentStructureModel(mongooseConnection); 
  const componentStructureRole = componentStructureRoleModel(mongooseConnection); 
  const verificationEmail = verificationEmailModel(mongooseConnection); 
  const counter = counterModel(mongooseConnection); 


  const cartaoConsumo = cartaoConsumoModel(mongooseConnection); 

  const cliente = clienteModel(mongooseConnection); 

  const cadastroCliente = cadastroClienteModel(mongooseConnection); 

  const cartaoCliente = cartaoClienteModel(mongooseConnection); 

  const categoria = categoriaModel(mongooseConnection); 

  const cozinha = cozinhaModel(mongooseConnection); 

  const endereco = enderecoModel(mongooseConnection); 

  const garcon = garconModel(mongooseConnection); 

  const itemPedido = itemPedidoModel(mongooseConnection); 

  const cardapio = cardapioModel(mongooseConnection); 

  const opcional = opcionalModel(mongooseConnection); 

  const pagamento = pagamentoModel(mongooseConnection); 

  const pedido = pedidoModel(mongooseConnection); 

  const produto = produtoModel(mongooseConnection); 

  const tipoPagamento = tipoPagamentoModel(mongooseConnection); 

  const entrega = entregaModel(mongooseConnection); 

  const models = new Map<string, any>(); 

  models.set('User', user); 
  models.set('Role', role); 
  //Models de controle de acesso as rotas 
  models.set('UserRole', userRole); 
  models.set('FunctionSystem', functionSystem); 
  models.set('FunctionSystemRole', functionSystemRole); 
  //Models de controle de acesso a ambiente 
  models.set('ComponentStructure', componentStructure); 
  models.set('ComponentStructureRole', componentStructureRole); 
  models.set('VerificationEmail', verificationEmail); 
  models.set('Counter', counter); 
  models.set('CartaoConsumo', cartaoConsumo); 
  models.set('Cliente', cliente); 
  models.set('CadastroCliente', cadastroCliente); 
  models.set('CartaoCliente', cartaoCliente); 
  models.set('Categoria', categoria); 
  models.set('Cozinha', cozinha); 
  models.set('Endereco', endereco); 
  models.set('Garcon', garcon); 
  models.set('ItemPedido', itemPedido); 
  models.set('Cardapio', cardapio); 
  models.set('Opcional', opcional); 
  models.set('Pagamento', pagamento); 
  models.set('Pedido', pedido); 
  models.set('Produto', produto); 
  models.set('TipoPagamento', tipoPagamento); 
  models.set('Entrega', entrega); 

  return models; 
} 
