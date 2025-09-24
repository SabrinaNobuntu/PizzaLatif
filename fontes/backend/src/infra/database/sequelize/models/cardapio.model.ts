import { Sequelize, DataTypes } from "sequelize"; 

export default function defineModel(sequelize: Sequelize){ 
  const schema = sequelize.define('cardapio', { 
      nomeMenu: {
      type: DataTypes.STRING , 
      field: ' nome_menu', 
    }, 
      descricaoMenu: {
      type: DataTypes.STRING , 
      field: 'descricao_menu', 
    }, 
      preco: {
      type: DataTypes.INTEGER , 
      field: ' preco', 
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
