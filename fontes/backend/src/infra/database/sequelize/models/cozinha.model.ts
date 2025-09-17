import { Sequelize, DataTypes } from "sequelize"; 

export default function defineModel(sequelize: Sequelize){ 
  const schema = sequelize.define('cozinha', { 
      nomePedido: {
      type: DataTypes.STRING , 
      field: 'Nome_pedido', 
    }, 
      dataHora: {
      type: DataTypes.INTEGER , 
      field: 'DataHora', 
    }, 
      statusPedido: {
      type: DataTypes.STRING , 
      field: 'StatusPedido', 
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
