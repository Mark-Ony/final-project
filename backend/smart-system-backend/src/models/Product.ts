import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  sellerId: string; // Clerk user ID
  name: string;
  price: number;
  stock: number;
  description: string;
  images: string[];
  whatsappLink: string;
  qrCode: string;
  createdAt: Date;
}

const ProductSchema = new Schema<IProduct>({
  sellerId: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  description: { type: String },
  images: [{ type: String }],
  whatsappLink: { type: String },
  qrCode: { type: String },
}, { timestamps: true });

export default mongoose.model<IProduct>('Product', ProductSchema);