import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema(
  {
    id: {type: Number, required: true},
    name: { type: String, required: true },
    orderId: {type: Number, required: true}
    
    
  },
  {
    timestamps: true,
  }
);

const Client =
  mongoose.models.Client || mongoose.model('Client', clientSchema);
export default Client;