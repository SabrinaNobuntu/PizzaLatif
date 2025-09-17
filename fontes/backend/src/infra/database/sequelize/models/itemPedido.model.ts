import { Sequelize, DataTypes } from "sequelize"; 

export default function defineModel(sequelize: Sequelize){ 
  const schema = sequelize.define('itemPedido', { 
      nomePedido: {
      type: DataTypes.STRING , 
      field: 'Nome_pedido', 
    }, 
      descricao: {
      type: DataTypes.STRING , 
      field: 'Descricao', 
    }, 
      quantidadePedido: {
      type: DataTypes.INTEGER , 
      field: ' Qtde_pedido', 
    }, 
      precoPedido: {
      type: DataTypes.INTEGER , 
      field: 'Preco_pedido', 
    }, 
      numeroMesa: {
      type: DataTypes.INTEGER , 
      field: 'Numero_mesa', 
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
