import { Sequelize, DataTypes } from "sequelize"; 

export default function defineModel(sequelize: Sequelize){ 
  const schema = sequelize.define('cozinha', { 
      nomePedido: {
      type: DataTypes.STRING , 
      field: 'nome_pedido', 
    }, 
      data: {
      type: DataTypes.DATE , 
      field: 'data', 
    }, 
      hora: {
      type: DataTypes.STRING , 
      field: 'hora', 
    }, 
      statusPedido: {
      type: DataTypes.STRING , 
      field: 'status_pedido', 
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
