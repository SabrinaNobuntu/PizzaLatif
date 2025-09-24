import { Sequelize, DataTypes } from "sequelize"; 

export default function defineModel(sequelize: Sequelize){ 
  const schema = sequelize.define('pedido', { 
      pedidoCancelado: {
      type: DataTypes.STRING , 
      field: ' pedido_cancelado', 
    }, 
      dataPedido: {
      type: DataTypes.DATE , 
      field: 'data_pedido', 
    }, 
      horaPedido: {
      type: DataTypes.STRING , 
      field: 'hora_pedido', 
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
