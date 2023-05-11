import express from 'express';
import { getStatus, postStatus, updateStatus } from '../controllers/servo.js';

const router = express.Router();

router.get('/:id', getStatus);
router.put('/:id', updateStatus);
router.post('/', postStatus);

export default router;
