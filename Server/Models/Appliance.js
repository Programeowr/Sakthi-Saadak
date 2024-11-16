import mongoose from 'mongoose';

const recordSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    appliance: { type: String, required: true },
    company: { type: String, required: true },
    time: { type: Number, required: true },
    frequency: { type: Number, required: true },
    rating: { type: Number, required: true },
    date: { type: String, required: true, default: () => new Date().toISOString().split('T')[0] }
}, { timestamps: true });

const Appliance = mongoose.model('Appliance', recordSchema);

export default Appliance;