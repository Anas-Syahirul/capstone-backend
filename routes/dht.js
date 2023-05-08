import express from 'express';
import { postDht } from '../controllers/dht.js';

const router = express.Router();

router.post('/', postDht);

export default router;
