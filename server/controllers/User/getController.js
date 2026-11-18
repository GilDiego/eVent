const User = require('../../database/models/User');
const Comment = require('../../database/models/Comment');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({ include: Comment });
    res.json(users);
  } catch (error) {
    res.json('error');
  }
};

exports.getUserByID = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findOne({ where: { id }, include: Comment });

    if (!user) return res.json({ msg: "Can't find an user whit ID: " + id });

    res.json(user);
  } catch (error) {
    res.json({ msg: 'Error!!' });
  }
};
