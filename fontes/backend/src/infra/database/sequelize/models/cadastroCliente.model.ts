import { Sequelize, DataTypes } from "sequelize"; 

export default function defineModel(sequelize: Sequelize){ 
  const schema = sequelize.define('cadastroCliente', { 
      nomeCliente: {
      type: DataTypes.STRING , 
      field: 'nome_Cliente', 
    }, 
      sobrenomeCliente: {
      type: DataTypes.STRING , 
      field: 'sobrenome_Cliente', 
    }, 
      emailCliente: {
      type: DataTypes.STRING , 
      field: 'email_cliente', 
    }, 
      emailclienteConfirma: {
      type: DataTypes.STRING , 
      field: 'email_cliente_confirma', 
    }, 
      senhaCliente: {
      type: DataTypes.STRING , 
      field: 'senha_cliente', 
    }, 
      senhaclienteConfirma: {
      type: DataTypes.STRING , 
      field: 'senha_cliente_confirma', 
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
