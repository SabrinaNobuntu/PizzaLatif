import { Sequelize, DataTypes } from "sequelize"; 

export default function defineModel(sequelize: Sequelize){ 
  const schema = sequelize.define('cartaoCliente', { 
      numeroCartao: {
      type: DataTypes.INTEGER , 
      field: ' numero_cartao', 
    }, 
      nomeImpresso: {
      type: DataTypes.STRING , 
      field: ' nome_impresso', 
    }, 
      dataValidade: {
      type: DataTypes.DATE , 
      field: ' data_validade', 
    }, 
      cvv: {
      type: DataTypes.INTEGER , 
      field: 'cvv', 
    }, 
      pedidoCartao: {
      type: DataTypes.STRING , 
      field: 'pedido_cartao', 
    }, 
      cpfcnpj: {
      type: DataTypes.STRING , 
      field: 'cpfcnpj', 
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
