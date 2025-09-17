import mongoose, { Connection } from "mongoose"; 
import { updateCounter } from "./counter.model"; 

export default function defineModel(mongooseConnection: Connection) {  

  if (mongooseConnection.models.cartaoCliente) { 
    return mongooseConnection.models.cartaoCliente; 
  } 

  var schema = new mongoose.Schema( 
    {
      _id: { 
        type: Number, 
        required: false 
      }, 
      numeroCartao: {
          type: Number,
      },
      nomeImpresso: {
          type: String,
      },
      anoValidade: {
          type: Number,
      },
      mesValidade: {
          type: Number,
      },
      diaValidade: {
          type: Number,
      },
      cvv: {
          type: Number,
      },
      pedidoCartao: {
          type: String,
      },
      cpfcnpj: {
          type: Number,
      },
        tipoPagamento: {type: mongoose.Schema.Types.ObjectId, ref: 'tipoPagamento'}, 
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

    this._id = await updateCounter(mongooseConnection, "CartaoCliente"); 
    next(); 
  }); 

  return mongooseConnection.model("cartaoCliente", schema); 
};
