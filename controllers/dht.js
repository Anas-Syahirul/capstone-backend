import Dht from '../models/dht.js';

export const postDht = async (req, res) => {
  try {
    const { temperature, humidity } = req.body;
    const newDht = new Dht({
      temperature,
      humidity,
    });
    const savedDht = await newDht.save();
    res.status(200).json(savedDht);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
