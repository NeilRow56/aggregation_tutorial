import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    id: {type: Number, required: true},
    item: { type: String, required: true },
    
    
  },
  {
    timestamps: true,
  }
);

const Order =
  mongoose.models.Order || mongoose.model('Order', orderSchema);
export default Order;