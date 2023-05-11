import Servo from '../models/Servo.js';

export const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const prevStatus = await Servo.findById(id);

    if (!prevStatus) {
      return res.status(404).json({ msg: 'Data Not Found' });
    }

    if (status == prevStatus.status) {
      return res.status(200).json({ msg: 'the status is still the same ' });
    }

    const data = await Servo.updateOne(
      { _id: id },
      {
        $set: {
          status,
        },
      }
    );
    return res.status(200).json({ msg: 'Data successfully updated' });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

export const getStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const status = await Servo.findById(id).lean();

    if (!status) {
      return res.status(404).json({ msg: 'Data not found' });
    }
    delete status._id;
    console.log(status._id);
    return res.status(200).json(status);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

export const postStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const newStatus = new Servo({ status });

    const savedStatus = await newStatus.save();
    return res.status(200).json(savedStatus);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
