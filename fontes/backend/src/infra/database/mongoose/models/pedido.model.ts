import mongoose, { Connection } from "mongoose"; 
import { updateCounter } from "./counter.model"; 

export default function defineModel(mongooseConnection: Connection) {  

  if (mongooseConnection.models.pedido) { 
    return mongooseConnection.models.pedido; 
  } 

  var schema = new mongoose.Schema( 
    {
      _id: { 
        type: Number, 
        required: false 
      }, 
      pedidoCancelado: {
          type: String,
      },
      dataPedido: {
          type: Date,
      },
      horaPedido: {
          type: String,
      },
        pagamento: {type: mongoose.Schema.Types.ObjectId, ref: 'pagamento'}, 
        garcon: {type: mongoose.Schema.Types.ObjectId, ref: 'garcon'}, 
        itemPedido: {type: mongoose.Schema.Types.ObjectId, ref: 'itemPedido'}, 
        cartaoConsumo: {type: mongoose.Schema.Types.ObjectId, ref: 'cartaoConsumo'}, 
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

    this._id = await updateCounter(mongooseConnection, "Pedido"); 
    next(); 
  }); 

  return mongooseConnection.model("pedido", schema); 
};
