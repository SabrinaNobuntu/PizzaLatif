import { Sequelize, DataTypes } from "sequelize"; 

export default function defineModel(sequelize: Sequelize){ 
  const schema = sequelize.define('endereco', { 
      rua: {
      type: DataTypes.STRING , 
      field: 'Rua', 
    }, 
      bairro: {
      type: DataTypes.STRING , 
      field: 'Bairro', 
    }, 
      cidade: {
      type: DataTypes.STRING , 
      field: 'Cidade', 
    }, 
      numeroMoradia: {
      type: DataTypes.INTEGER , 
      field: 'NumeroDaMoradia', 
    }, 
      cep: {
      type: DataTypes.INTEGER , 
      field: 'CEP', 
    }, 
      complemento: {
      type: DataTypes.STRING , 
      field: 'Complemento', 
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
