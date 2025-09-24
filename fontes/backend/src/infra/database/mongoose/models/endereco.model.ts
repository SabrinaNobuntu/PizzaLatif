import mongoose, { Connection } from "mongoose"; 
import { updateCounter } from "./counter.model"; 

export default function defineModel(mongooseConnection: Connection) {  

  if (mongooseConnection.models.endereco) { 
    return mongooseConnection.models.endereco; 
  } 

  var schema = new mongoose.Schema( 
    {
      _id: { 
        type: Number, 
        required: false 
      }, 
      rua: {
          type: String,
      },
      bairro: {
          type: String,
      },
      cidade: {
          type: String,
      },
      numeroMoradia: {
          type: Number,
      },
      cep: {
          type: String,
      },
      complemento: {
          type: String,
      },
        cadastroCliente: {type: mongoose.Schema.Types.ObjectId, ref: 'cadastroCliente'}, 
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

    this._id = await updateCounter(mongooseConnection, "Endereco"); 
    next(); 
  }); 

  return mongooseConnection.model("endereco", schema); 
};
