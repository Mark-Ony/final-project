import mongoose, { Schema, Document } from 'mongoose';

export interface IPayment extends Document {
  orderId: mongoose.Types.ObjectId;
  mpesaCode: string;
  phone: string;
  amount: number;
  status: 'pending' | 'confirmed' | 'failed';
  confirmedAt: Date;
}

const PaymentSchema = new Schema<IPayment>({
  orderId: { type: Schema.Types.ObjectId, ref: 'Order' },
  mpesaCode: { type: String },
  phone: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ['pending','confirmed','failed'], default: 'pending' },
  confirmedAt: { type: Date },
}, { timestamps: true });

export default mongoose.model<IPayment>('Payment', PaymentSchema);