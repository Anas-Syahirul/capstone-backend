import mongoose from 'mongoose';

const DhtSchema = new mongoose.Schema(
  {
    temperature: Number,
    humidity: Number,
  },
  { timestamps: true }
);

const Dht = mongoose.model('Dht', DhtSchema);

export default Dht;
