import { Sequelize, DataTypes } from "sequelize"; 

export default function defineModel(sequelize: Sequelize){ 
  const schema = sequelize.define('produto', { 
      nomeProduto: {
      type: DataTypes.STRING , 
      field: ' nome_produto', 
    }, 
      codigo: {
      type: DataTypes.INTEGER , 
      field: 'codigo', 
    }, 
      descricaoProduto: {
      type: DataTypes.STRING , 
      field: 'descricao_produto', 
    }, 
      precoProduto: {
      type: DataTypes.INTEGER , 
      field: 'preco_produto', 
    }, 
      imagem: {
      type: DataTypes.STRING , 
      field: 'imagem', 
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
