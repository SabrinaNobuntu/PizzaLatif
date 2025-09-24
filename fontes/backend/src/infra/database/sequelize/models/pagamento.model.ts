import { Sequelize, DataTypes } from "sequelize"; 

export default function defineModel(sequelize: Sequelize){ 
  const schema = sequelize.define('pagamento', { 
      valorPagamento: {
      type: DataTypes.INTEGER , 
      field: 'valor_pagamento', 
    }, 
      dataPagamento: {
      type: DataTypes.DATE , 
      field: 'data_pagamento', 
    }, 
      horaPagamento: {
      type: DataTypes.STRING , 
      field: 'hora_pagamento', 
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
