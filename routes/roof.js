import express from 'express';
import { getStatus, postStatus, updateStatus } from '../controllers/roof.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/', verifyToken, postStatus);
router.get('/', verifyToken, getStatus);
router.put('/', verifyToken, updateStatus);

export default router;
