import { Sequelize, DataTypes } from "sequelize"; 

export default function defineModel(sequelize: Sequelize){ 
  const schema = sequelize.define('itemPedido', { 
      nomePedido: {
      type: DataTypes.STRING , 
      field: 'nome_pedido', 
    }, 
      descricao: {
      type: DataTypes.STRING , 
      field: 'descricao', 
    }, 
      quantidadePedido: {
      type: DataTypes.INTEGER , 
      field: ' quantidade_pedido', 
    }, 
      precoPedido: {
      type: DataTypes.INTEGER , 
      field: 'preco_pedido', 
    }, 
      numeroMesa: {
      type: DataTypes.INTEGER , 
      field: 'numero_mesa', 
    }, 
  }); 

  schema.prototype.toJSON = function() { 
    const values = Object.assign({}, this.get()); 

    values.id = values.id; 
    delete values._id; 
    delete values.__v; 
    return values; 
  }; 

  return schema; 
};
