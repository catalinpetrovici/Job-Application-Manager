const createJob = (req, res) => {
  res.status(200).json({ msg: 'createJob' });
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
