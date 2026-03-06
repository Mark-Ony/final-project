import mongoose, { Schema, Document } from 'mongoose';

export interface ILead extends Document {
  sellerId: string;
  productId: mongoose.Types.ObjectId;
  customerPhone: string;
  source: string;
  status: 'new' | 'contacted' | 'interested' | 'converted' | 'lost';
  lastContacted: Date;
  createdAt: Date;
}

const LeadSchema = new Schema<ILead>({
  sellerId: { type: String, required: true },
  productId: { type: Schema.Types.ObjectId, ref: 'Product' },
  customerPhone: { type: String, required: true },
  source: { type: String, default: 'whatsapp' },
  status: { type: String, enum: ['new','contacted','interested','converted','lost'], default: 'new' },
  lastContacted: { type: Date },
}, { timestamps: true });

export default mongoose.model<ILead>('Lead', LeadSchema);