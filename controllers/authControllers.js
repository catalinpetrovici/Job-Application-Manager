const register = (req, res) => {
  res.status(200).json({ msg: 'register' });
};

const login = (req, res) => {
  res.status(200).json({ msg: 'login' });
};

const updateUser = (req, res) => {
  res.status(200).json({ msg: 'updateUser' });
};

export { register, login, updateUser };
