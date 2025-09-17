import mongoose, { Connection } from "mongoose"; 
import { updateCounter } from "./counter.model"; 

export default function defineModel(mongooseConnection: Connection) {  

  if (mongooseConnection.models.cadastroCliente) { 
    return mongooseConnection.models.cadastroCliente; 
  } 

  var schema = new mongoose.Schema( 
    {
      _id: { 
        type: Number, 
        required: false 
      }, 
      nomeCliente: {
          type: String,
      },
      sobrenomeCliente: {
          type: String,
      },
      emailCliente: {
          type: String,
      },
      emailclienteConfirma: {
          type: String,
      },
      senhaCliente: {
          type: String,
      },
      senhaclienteConfirma: {
          type: String,
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

    this._id = await updateCounter(mongooseConnection, "CadastroCliente"); 
    next(); 
  }); 

  return mongooseConnection.model("cadastroCliente", schema); 
};
