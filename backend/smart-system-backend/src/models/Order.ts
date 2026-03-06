import mongoose, { Schema, Document } from 'mongoose';

export interface IOrder extends Document {
  leadId: mongoose.Types.ObjectId;
  productId: mongoose.Types.ObjectId;
  customerName: string;
  location: string;
  quantity: number;
  amount: number;
  status: 'pending' | 'confirmed' | 'packed' | 'shipped' | 'delivered';
  createdAt: Date;
}

const OrderSchema = new Schema<IOrder>({
  leadId: { type: Schema.Types.ObjectId, ref: 'Lead' },
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  customerName: { type: String, required: true },
  location: { type: String, required: true },
  quantity: { type: Number, default: 1 },
  amount: { type: Number, required: true },
  status: { type: String, enum: ['pending','confirmed','packed','shipped','delivered'], default: 'pending' },
}, { timestamps: true });

export default mongoose.model<IOrder>('Order', OrderSchema);