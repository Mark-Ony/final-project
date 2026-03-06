import mongoose, { Schema, Document } from 'mongoose';

export interface IConversation extends Document {
  leadId: mongoose.Types.ObjectId;
  message: string;
  sender: 'ai' | 'customer' | 'seller';
  timestamp: Date;
}

const ConversationSchema = new Schema<IConversation>({
  leadId: { type: Schema.Types.ObjectId, ref: 'Lead', required: true },
  message: { type: String, required: true },
  sender: { type: String, enum: ['ai', 'customer', 'seller'], required: true },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model<IConversation>('Conversation', ConversationSchema);