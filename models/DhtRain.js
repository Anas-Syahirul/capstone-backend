import mongoose from 'mongoose';

const DhtRainSchema = new mongoose.Schema(
  {
    temperature: Number,
    humidity: Number,
    rainWetAreaPercentage: Number,
  },
  { timestamps: true }
);

const DhtRain = mongoose.model('DhtRain', DhtRainSchema);

export default DhtRain;
