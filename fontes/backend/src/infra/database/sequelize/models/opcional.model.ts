import { Sequelize, DataTypes } from "sequelize"; 

export default function defineModel(sequelize: Sequelize){ 
  const schema = sequelize.define('opcional', { 
      nomeOpcional: {
      type: DataTypes.STRING , 
      field: 'Nome_opcional', 
    }, 
      tipoOpcional: {
      type: DataTypes.STRING , 
      field: 'Tipo_opcional', 
    }, 
      maximaOpcionais: {
      type: DataTypes.INTEGER , 
      field: 'Maxima_opcionais', 
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
