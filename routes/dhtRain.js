import express from 'express';
import {
  getDhtRain,
  postDhtRain,
  updateDhtRain,
} from '../controllers/dhtRain.js';

const router = express.Router();

router.post('/', postDhtRain);
router.put('/:id', updateDhtRain);
router.get('/:id', getDhtRain);

export default router;
