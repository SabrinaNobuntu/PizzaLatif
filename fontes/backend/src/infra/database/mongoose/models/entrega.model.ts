import mongoose, { Connection } from "mongoose"; 
import { updateCounter } from "./counter.model"; 

export default function defineModel(mongooseConnection: Connection) {  

  if (mongooseConnection.models.entrega) { 
    return mongooseConnection.models.entrega; 
  } 

  var schema = new mongoose.Schema( 
    {
      _id: { 
        type: Number, 
        required: false 
      }, 
      status: {
          type: String,
      },
      dataEntregaPrevista: {
          type: Date,
      },
      horaEntregaPrevista: {
          type: String,
      },
      dataEntregaReal: {
          type: Date,
      },
      horaEntregaReal: {
          type: String,
      },
      motoboy: {
          type: String,
      },
      observacoes: {
          type: String,
      },
        pedido: {type: mongoose.Schema.Types.ObjectId, ref: 'pedido'}, 
      valor: {
          type: Number,
        validate: { 
          validator: function(value: number) { 
            const [beforeComma] = value.toString().split('.'); 
            return beforeComma.length <= 5; 
          }, 
          message: "O campo deve ter no máximo 5 dígitos antes da vírgula." 
        } 
      },
        endereco: {type: mongoose.Schema.Types.ObjectId, ref: 'endereco'}, 
    },
    { timestamps: true }
  );

  schema.set("toObject", {
    transform: (doc, ret, options) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  });

  schema.set('toObject', { 
    virtuals: true, 
    versionKey: false, 
    transform: (doc, ret) => { 
      ret.id = ret._id; 
      delete ret._id; 
    } 
  }); 

  schema.pre('save', async function (next) { 
    if (!this.isNew) return next(); 

    this._id = await updateCounter(mongooseConnection, "Entrega"); 
    next(); 
  }); 

  return mongooseConnection.model("entrega", schema); 
};
