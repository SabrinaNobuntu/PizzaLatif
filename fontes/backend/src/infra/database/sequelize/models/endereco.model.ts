import { Sequelize, DataTypes } from "sequelize"; 

export default function defineModel(sequelize: Sequelize){ 
  const schema = sequelize.define('endereco', { 
      rua: {
      type: DataTypes.STRING , 
      field: 'rua', 
    }, 
      bairro: {
      type: DataTypes.STRING , 
      field: 'bairro', 
    }, 
      cidade: {
      type: DataTypes.STRING , 
      field: 'cidade', 
    }, 
      numeroMoradia: {
      type: DataTypes.INTEGER , 
      field: 'numero_moradia', 
    }, 
      cep: {
      type: DataTypes.STRING , 
      field: 'cep', 
    }, 
      complemento: {
      type: DataTypes.STRING , 
      field: 'complemento', 
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
