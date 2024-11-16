
import mongoose from 'mongoose';

const powerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  power: { type: Number, required: true },
  cost: { type: Number, required: true },
  date: { type: String, required: true, default: () => new Date().toISOString().split('T')[0] }
}, { timestamps: true });

const Power = mongoose.model('Power', powerSchema);
export default Power;