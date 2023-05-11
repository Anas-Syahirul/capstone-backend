import DhtRain from '../models/DhtRain.js';

export const postDhtRain = async (req, res) => {
  try {
    const { temperature, humidity, rainWetAreaPercentage } = req.body;
    const newDhtRain = new DhtRain({
      temperature,
      humidity,
      rainWetAreaPercentage,
    });
    const savedDhtRain = await newDhtRain.save();
    return res.status(200).json(savedDhtRain);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

export const updateDhtRain = async (req, res) => {
  try {
    const { id } = req.params;
    const prevData = await DhtRain.findById(id);

    const { temperature, humidity, rainWetAreaPercentage } = req.body;

    if (!prevData) {
      return res.status(400).json({ msg: 'Data Not Found' });
    }

    // const newData = new DhtRain({
    //   temperature,
    //   humidity,
    //   rainWetAreaPercentage,
    // })

    const data = await DhtRain.updateOne(
      { _id: id },
      {
        $set: {
          temperature,
          humidity,
          rainWetAreaPercentage,
        },
      }
    );
    return res.status(200).json({ msg: 'Data successfully updated' });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

export const getDhtRain = async (req, res) => {
  try {
    const { id } = req.params;
    const dhtRain = await DhtRain.findById(id).lean();
    if (!dhtRain) {
      return res.status(404).json({ msg: 'Data not Found' });
    }
    delete dhtRain._id;
    return res.status(400).json(dhtRain);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
