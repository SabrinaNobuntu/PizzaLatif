import { Sequelize, DataTypes } from "sequelize"; 

export default function defineModel(sequelize: Sequelize){ 
  const schema = sequelize.define('cartaoCliente', { 
      numeroCartao: {
      type: DataTypes.INTEGER , 
      field: ' NumeroCartao', 
    }, 
      nomeImpresso: {
      type: DataTypes.STRING , 
      field: ' NomeImpresso', 
    }, 
      anoValidade: {
      type: DataTypes.INTEGER , 
      field: ' AnoValidade', 
    }, 
      mesValidade: {
      type: DataTypes.INTEGER , 
      field: 'MesValidade', 
    }, 
      diaValidade: {
      type: DataTypes.INTEGER , 
      field: 'DiaValidade', 
    }, 
      cvv: {
      type: DataTypes.INTEGER , 
      field: 'CVV', 
    }, 
      pedidoCartao: {
      type: DataTypes.STRING , 
      field: 'PedidoCartao', 
    }, 
      cpfcnpj: {
      type: DataTypes.INTEGER , 
      field: 'CPFCNPJ', 
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
