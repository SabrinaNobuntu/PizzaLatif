import { Sequelize, DataTypes } from "sequelize"; 

export default function defineModel(sequelize: Sequelize){ 
  const schema = sequelize.define('produto', { 
      nomeProduto: {
      type: DataTypes.STRING , 
      field: ' Nome_produto', 
    }, 
      codigo: {
      type: DataTypes.INTEGER , 
      field: 'Codigo', 
    }, 
      descricaoProduto: {
      type: DataTypes.STRING , 
      field: 'Descricao_produtos', 
    }, 
      precoProduto: {
      type: DataTypes.INTEGER , 
      field: 'Preco_produto', 
    }, 
      imagem: {
      type: DataTypes.STRING , 
      field: 'Imagem', 
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
