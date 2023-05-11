import mongoose from 'mongoose';

export const ServoSchema = new mongoose.Schema(
  {
    status: String,
  },
  { timestamps: true }
);

const Servo = mongoose.model('Servo', ServoSchema);

export default Servo;
