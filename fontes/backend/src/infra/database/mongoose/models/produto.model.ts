import mongoose, { Connection } from "mongoose"; 
import { updateCounter } from "./counter.model"; 

export default function defineModel(mongooseConnection: Connection) {  

  if (mongooseConnection.models.produto) { 
    return mongooseConnection.models.produto; 
  } 

  var schema = new mongoose.Schema( 
    {
      _id: { 
        type: Number, 
        required: false 
      }, 
      nomeProduto: {
          type: String,
      },
      codigo: {
          type: Number,
      },
      descricaoProduto: {
          type: String,
      },
      precoProduto: {
          type: Number,
      },
      imagem: {
          type: String,
      },
        categoria: {type: mongoose.Schema.Types.ObjectId, ref: 'categoria'}, 
        opcional: {type: mongoose.Schema.Types.ObjectId, ref: 'opcional'}, 
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

    this._id = await updateCounter(mongooseConnection, "Produto"); 
    next(); 
  }); 

  return mongooseConnection.model("produto", schema); 
};
