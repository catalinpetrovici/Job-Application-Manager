import express from 'express';
const router = express.Router();
import authenticateUser from '../middleware/auth.js';

import {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  showStats,
} from '../controllers/jobControllers.js';

router.get('/', authenticateUser, getAllJobs);
router.post('/', authenticateUser, createJob);
router.get('/stats', authenticateUser, showStats);
router.patch('/:id', authenticateUser, updateJob);
router.delete('/:id', authenticateUser, deleteJob);

export default router;
