import { ModelStatic, Sequelize } from "sequelize"; 
import userModel from "./user.model";
import roleModel from "./role.model";
import userRoleModel from "./userRole.model";
import functionSystemModel from "./functionSystem.model";
import functionSystemRoleModel from "./functionSystemRole.model";
import componentStructureModel from "./componentStructure.model";
import componentStructureRoleModel from "./componentStructureRole.model";
import fileModel from "./file.model";
import fieldFileModel from "./fieldFile.model";
import TenantConnection from "../../../../domain/entities/tenantConnection.model";
import verificationEmailModel from "./verificationEmail.model"; 
import menuModel from "./menu.model";
import menuItemModel from "./menuItem.model";
import menuConfigModel from "./menuConfig.model";
import roleMenuModel from "./roleMenu.model";

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
  const sequelizeConnection = tenantConnection.connection; 

  if(sequelizeConnection instanceof Sequelize == false){ 
    throw new Error("Instance of database connection is incompatible with setModels function on sequelize."); 
  } 

  const user = userModel(sequelizeConnection); 
  const role = roleModel(sequelizeConnection); 
  const userRole = userRoleModel(sequelizeConnection); 
  const functionSystem = functionSystemModel(sequelizeConnection); 
  const functionSystemRole = functionSystemRoleModel(sequelizeConnection); 
  const componentStructure = componentStructureModel(sequelizeConnection); 
  const componentStructureRole = componentStructureRoleModel(sequelizeConnection); 
  const file = fileModel(sequelizeConnection); 
  const fieldFile = fieldFileModel(sequelizeConnection); 
  const verificationEmail = verificationEmailModel(sequelizeConnection); 
  const menu = menuModel(sequelizeConnection); 
  const menuItem = menuItemModel(sequelizeConnection); 
  const menuConfig = menuConfigModel(sequelizeConnection); 
  const roleMenu = roleMenuModel(sequelizeConnection); 

  //Relação de um para um de fieldFile para user com chave em fielFile 
  user.hasOne(fieldFile, {foreignKey: "user", as: "ALIASuserALIASfieldFileALIAS"}); 
  fieldFile.belongsTo(user, {foreignKey: "user", as: "ALIASuserALIASfieldFileALIAS"}); 

  //Relação de um para muitos de fieldFile para file 
  fieldFile.hasMany(file, {foreignKey: "fieldFile", as: "ALIASfilesALIASfieldFileALIAS", onDelete: 'CASCADE'});  

  //Relação de muitos pra muitos de User para Role 
  user.belongsToMany(role, {through: userRole, foreignKey: "userId", otherKey: "roleId"}); 
  role.belongsToMany(user, {through: userRole, foreignKey: "roleId", otherKey: "userId"}); 

  //Relação de muitos pra muitos entre Role e FunctionsSystem 
  role.belongsToMany(functionSystem, {through: functionSystemRole, foreignKey: "roleId", otherKey: "functionSystemId", as: "functionSystem",});

  functionSystem.belongsToMany(role, {through: functionSystemRole, foreignKey: "functionSystemId", otherKey: "roleId", as: "role"});


  //Relação de muitos para muitos entre ComponentStructure e Role 
  componentStructure.belongsToMany(role, {through: componentStructureRole, foreignKey: "componentStructureId", otherKey: "roleId"}); 
  role.belongsToMany(componentStructure, {through: componentStructureRole, foreignKey: "roleId", otherKey: "componentStructureId"}); 

  //Relação para o menu 
  menu.hasMany(menuItem, { foreignKey: "menuId" }); 
  menuItem.belongsTo(menu, { foreignKey: "menuId", as: "menu" }); 

  menuConfig.hasOne(menu, { foreignKey: "menuConfigId" }); 
  menu.belongsTo(menuConfig, { foreignKey: "menuConfigId", as: "menuConfig" }); 

  menuItem.hasMany(menuItem, { foreignKey: "subMenuId" }); 
  menuItem.belongsTo(menuItem, { foreignKey: "subMenuId", as: "subMenu" }); 

  role.belongsToMany(menu, { 
    through: roleMenu, 
    as: 'menus', 
    foreignKey: 'roleId', 
    otherKey: 'menuId' 
  }); 

  menu.belongsToMany(role, { 
    through: roleMenu, 
    as: 'roles', 
    foreignKey: 'menuId', 
    otherKey: 'roleId' 
  }); 

  const cartaoConsumo = cartaoConsumoModel(sequelizeConnection); 


  const cliente = clienteModel(sequelizeConnection); 


  const cadastroCliente = cadastroClienteModel(sequelizeConnection); 


  const cartaoCliente = cartaoClienteModel(sequelizeConnection); 


  const categoria = categoriaModel(sequelizeConnection); 


  const cozinha = cozinhaModel(sequelizeConnection); 


  const endereco = enderecoModel(sequelizeConnection); 


  const garcon = garconModel(sequelizeConnection); 


  const itemPedido = itemPedidoModel(sequelizeConnection); 


  const cardapio = cardapioModel(sequelizeConnection); 


  const opcional = opcionalModel(sequelizeConnection); 


  const pagamento = pagamentoModel(sequelizeConnection); 


  const pedido = pedidoModel(sequelizeConnection); 


  const produto = produtoModel(sequelizeConnection); 


  const tipoPagamento = tipoPagamentoModel(sequelizeConnection); 


  const entrega = entregaModel(sequelizeConnection); 


  cliente.hasOne(cartaoConsumo, {foreignKey: {name: "clientes", allowNull: true, field: "ID_Clientes" }, as: "ALIASclientesALIAScartaoConsumo"}); 
  cartaoConsumo.belongsTo(cliente,  {foreignKey: {name: "clientes", allowNull: true, field: "ID_Clientes" }, as: "ALIASclientesALIAScartaoConsumo"}); 

  tipoPagamento.hasOne(cartaoCliente, {foreignKey: {name: "tipoPagamento", allowNull: true, field: "ID_TipoPagamento" }, as: "ALIAStipoPagamentoALIAScartaoCliente"}); 
  cartaoCliente.belongsTo(tipoPagamento,  {foreignKey: {name: "tipoPagamento", allowNull: true, field: "ID_TipoPagamento" }, as: "ALIAStipoPagamentoALIAScartaoCliente"}); 

  itemPedido.hasOne(cozinha, {foreignKey: {name: "itemPedido", allowNull: true, field: "ID_ItensPedido" }, as: "ALIASitemPedidoALIAScozinha"}); 
  cozinha.belongsTo(itemPedido,  {foreignKey: {name: "itemPedido", allowNull: true, field: "ID_ItensPedido" }, as: "ALIASitemPedidoALIAScozinha"}); 

  cadastroCliente.hasOne(endereco, {foreignKey: {name: "cadastroCliente", allowNull: true, field: "ID_CadastroCliente" }, as: "ALIAScadastroClienteALIASendereco"}); 
  endereco.belongsTo(cadastroCliente,  {foreignKey: {name: "cadastroCliente", allowNull: true, field: "ID_CadastroCliente" }, as: "ALIAScadastroClienteALIASendereco"}); 

  produto.hasOne(cardapio, {foreignKey: {name: "produto", allowNull: true, field: "ID_Produtos" }, as: "ALIASprodutoALIAScardapio"}); 
  cardapio.belongsTo(produto,  {foreignKey: {name: "produto", allowNull: true, field: "ID_Produtos" }, as: "ALIASprodutoALIAScardapio"}); 

  produto.hasOne(opcional, {foreignKey: {name: "produto", allowNull: true, field: " ID_Produtos" }, as: "ALIASprodutoALIASopcional"}); 
  opcional.belongsTo(produto,  {foreignKey: {name: "produto", allowNull: true, field: " ID_Produtos" }, as: "ALIASprodutoALIASopcional"}); 

  categoria.hasOne(opcional, {foreignKey: {name: "categoria", allowNull: true, field: " ID_Categoria" }, as: "ALIAScategoriaALIASopcional"}); 
  opcional.belongsTo(categoria,  {foreignKey: {name: "categoria", allowNull: true, field: " ID_Categoria" }, as: "ALIAScategoriaALIASopcional"}); 

  tipoPagamento.hasOne(pagamento, {foreignKey: {name: "tipoPagamento", allowNull: true, field: "ID_TipoPagamento" }, as: "ALIAStipoPagamentoALIASpagamento"}); 
  pagamento.belongsTo(tipoPagamento,  {foreignKey: {name: "tipoPagamento", allowNull: true, field: "ID_TipoPagamento" }, as: "ALIAStipoPagamentoALIASpagamento"}); 

  pagamento.hasOne(pedido, {foreignKey: {name: "pagamento", allowNull: true, field: "ID_Pagamento" }, as: "ALIASpagamentoALIASpedido"}); 
  pedido.belongsTo(pagamento,  {foreignKey: {name: "pagamento", allowNull: true, field: "ID_Pagamento" }, as: "ALIASpagamentoALIASpedido"}); 

  garcon.hasOne(pedido, {foreignKey: {name: "garcon", allowNull: true, field: "ID_Garcon" }, as: "ALIASgarconALIASpedido"}); 
  pedido.belongsTo(garcon,  {foreignKey: {name: "garcon", allowNull: true, field: "ID_Garcon" }, as: "ALIASgarconALIASpedido"}); 

  itemPedido.hasOne(pedido, {foreignKey: {name: "itemPedido", allowNull: true, field: "ID_ItensPedido" }, as: "ALIASitemPedidoALIASpedido"}); 
  pedido.belongsTo(itemPedido,  {foreignKey: {name: "itemPedido", allowNull: true, field: "ID_ItensPedido" }, as: "ALIASitemPedidoALIASpedido"}); 

  cartaoConsumo.hasOne(pedido, {foreignKey: {name: "cartaoConsumo", allowNull: true, field: " ID_Cartao" }, as: "ALIAScartaoConsumoALIASpedido"}); 
  pedido.belongsTo(cartaoConsumo,  {foreignKey: {name: "cartaoConsumo", allowNull: true, field: " ID_Cartao" }, as: "ALIAScartaoConsumoALIASpedido"}); 

  categoria.hasOne(produto, {foreignKey: {name: "categoria", allowNull: true, field: "ID_Categoria" }, as: "ALIAScategoriaALIASproduto"}); 
  produto.belongsTo(categoria,  {foreignKey: {name: "categoria", allowNull: true, field: "ID_Categoria" }, as: "ALIAScategoriaALIASproduto"}); 

  opcional.hasOne(produto, {foreignKey: {name: "opcional", allowNull: true, field: "ID_Opcional" }, as: "ALIASopcionalALIASproduto"}); 
  produto.belongsTo(opcional,  {foreignKey: {name: "opcional", allowNull: true, field: "ID_Opcional" }, as: "ALIASopcionalALIASproduto"}); 

  pedido.hasOne(entrega, {foreignKey: {name: "pedido", allowNull: true, field: "pedido" }, as: "ALIASpedidoALIASentrega"}); 
  entrega.belongsTo(pedido,  {foreignKey: {name: "pedido", allowNull: true, field: "pedido" }, as: "ALIASpedidoALIASentrega"}); 

  endereco.hasOne(entrega, {foreignKey: {name: "endereco", allowNull: true, field: "endereco" }, as: "ALIASenderecoALIASentrega"}); 
  entrega.belongsTo(endereco,  {foreignKey: {name: "endereco", allowNull: true, field: "endereco" }, as: "ALIASenderecoALIASentrega"}); 

  await sequelizeConnection.sync({ alter: true }).then(() => { 
    console.log("Banco de dados sincronizado"); 
  }).catch((error) => { 
    console.log("Erro ao sincronizar o banco de dados"); 
  }); 

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
  //Models de arquivos 
  models.set('File', file); 
  models.set('FieldFile', fieldFile); 
  //Models de menu 
  models.set('Menu', menu); 
  models.set('MenuItem', menuItem); 
  models.set('MenuConfig', menuConfig); 
  models.set('RoleMenu', roleMenu); 
  //Modelos do projeto
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
