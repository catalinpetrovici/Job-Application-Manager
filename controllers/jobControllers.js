import Job from '../models/Job.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';

const createJob = async (req, res) => {
  const { position, company } = req.body;

  if (!position || !company) {
    throw new BadRequestError('Please Provide All Values');
  }

  req.body.createdBy = req.user.userId;

  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const deleteJob = (req, res) => {
  res.status(200).json({ msg: 'deleteJob' });
};

const getAllJobs = (req, res) => {
  res.status(200).json({ msg: 'getAllJobs' });
};

const updateJob = (req, res) => {
  res.status(200).json({ msg: 'updateJob' });
};

const showStats = (req, res) => {
  res.status(200).json({ msg: 'showStats' });
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
