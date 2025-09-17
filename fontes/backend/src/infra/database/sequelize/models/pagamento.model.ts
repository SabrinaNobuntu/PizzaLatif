import { Sequelize, DataTypes } from "sequelize"; 

export default function defineModel(sequelize: Sequelize){ 
  const schema = sequelize.define('pagamento', { 
      valorPagamento: {
      type: DataTypes.INTEGER , 
      field: 'Valor_pagamento', 
    }, 
      datahoraPagamento: {
      type: DataTypes.INTEGER , 
      field: 'DataHora_pagamento', 
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
