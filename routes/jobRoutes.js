import express from 'express';
const router = express.Router();
import {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  showStats,
} from '../controllers/jobControllers.js';

router.get('/', getAllJobs);
router.post('/', createJob);
router.get('/stats', showStats);
router.patch('/:id', updateJob);
router.delete('/:id', deleteJob);

export default router;
