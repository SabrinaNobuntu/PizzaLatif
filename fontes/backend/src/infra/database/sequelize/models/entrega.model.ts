import { Sequelize, DataTypes } from "sequelize"; 

export default function defineModel(sequelize: Sequelize) { 
  const Entrega = sequelize.define('entrega', { 
    status: {
      type: DataTypes.STRING, 
      field: 'status', 
    }, 
    dataEntregaPrevista: {
      type: DataTypes.DATE, 
      field: 'data_entrega_prevista', 
    }, 
    horaEntregaPrevista: {
      type: DataTypes.STRING, 
      field: 'hora_entrega_prevista', 
    }, 
    dataEntregaReal: {
      type: DataTypes.DATE, 
      field: 'data_entrega_real', 
    }, 
    horaEntregaReal: {
      type: DataTypes.STRING, 
      field: 'hora_entrega_real', 
    }, 
    motoboy: {
      type: DataTypes.STRING, 
      field: 'motoboy', 
    }, 
    observacoes: {
      type: DataTypes.STRING, 
      field: 'observacoes', 
    }, 
    valor: {
      type: DataTypes.DOUBLE, 
      field: 'valor',
      validate: { 
        maxFiveDigitsBeforeDecimal(value: number) { 
          const [beforeDecimal] = value.toString().split('.');
          if (beforeDecimal.length > 5) { 
            throw new Error("O campo deve ter no máximo 5 dígitos antes da vírgula."); 
          } 
        },
      },
    }, 
  }); 

  Entrega.prototype.toJSON = function() { 
    const values = Object.assign({}, this.get()); 
    return values; 
  }; 

  return Entrega; 
};
