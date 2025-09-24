import { Sequelize, DataTypes } from "sequelize"; 

export default function defineModel(sequelize: Sequelize){ 
  const schema = sequelize.define('categoria', { 
      nomeCategoria: {
      type: DataTypes.STRING , 
      field: ' nome_categoria', 
    }, 
      usaopcoesTamanho: {
      type: DataTypes.STRING , 
      field: 'usa_opcoes_tamanho', 
    }, 
      usaopcoesBorda: {
      type: DataTypes.STRING , 
      field: 'usa_opcoes_borda', 
    }, 
      setor: {
      type: DataTypes.STRING , 
      field: 'setor', 
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
