import mongoose, { Connection } from "mongoose"; 
import { updateCounter } from "./counter.model"; 

export default function defineModel(mongooseConnection: Connection) {  

  if (mongooseConnection.models.opcional) { 
    return mongooseConnection.models.opcional; 
  } 

  var schema = new mongoose.Schema( 
    {
      _id: { 
        type: Number, 
        required: false 
      }, 
      nomeOpcional: {
          type: String,
      },
      tipoOpcional: {
          type: String,
      },
      maximaOpcionais: {
          type: Number,
      },
        produto: {type: mongoose.Schema.Types.ObjectId, ref: 'produto'}, 
        categoria: {type: mongoose.Schema.Types.ObjectId, ref: 'categoria'}, 
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

    this._id = await updateCounter(mongooseConnection, "Opcional"); 
    next(); 
  }); 

  return mongooseConnection.model("opcional", schema); 
};
