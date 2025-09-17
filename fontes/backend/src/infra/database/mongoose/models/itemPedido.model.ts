import mongoose, { Connection } from "mongoose"; 
import { updateCounter } from "./counter.model"; 

export default function defineModel(mongooseConnection: Connection) {  

  if (mongooseConnection.models.itemPedido) { 
    return mongooseConnection.models.itemPedido; 
  } 

  var schema = new mongoose.Schema( 
    {
      _id: { 
        type: Number, 
        required: false 
      }, 
      nomePedido: {
          type: String,
      },
      descricao: {
          type: String,
      },
      quantidadePedido: {
          type: Number,
      },
      precoPedido: {
          type: Number,
      },
      numeroMesa: {
          type: Number,
      }
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

    this._id = await updateCounter(mongooseConnection, "ItemPedido"); 
    next(); 
  }); 

  return mongooseConnection.model("itemPedido", schema); 
};
