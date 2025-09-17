import { Sequelize, DataTypes } from "sequelize"; 

export default function defineModel(sequelize: Sequelize){ 
  const schema = sequelize.define('cadastroCliente', { 
      nomeCliente: {
      type: DataTypes.STRING , 
      field: 'NomeDoCliente', 
    }, 
      sobrenomeCliente: {
      type: DataTypes.STRING , 
      field: 'SobrenomeDoCliente', 
    }, 
      emailCliente: {
      type: DataTypes.STRING , 
      field: 'EmailDoCliente', 
    }, 
      emailclienteConfirma: {
      type: DataTypes.STRING , 
      field: 'EmailDoClienteConfirma', 
    }, 
      senhaCliente: {
      type: DataTypes.STRING , 
      field: 'SenhaDoCliente', 
    }, 
      senhaclienteConfirma: {
      type: DataTypes.STRING , 
      field: 'SenhaDoClienteConfirma', 
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
