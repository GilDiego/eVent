const User = require('../../database/models/User');

exports.postUser = async (req, res) => {
  const { first_name, last_name, username, password, birthdate, picture, email, phone } = req.body;

  try {
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { first_name, last_name, username, password, birthdate, picture, email, phone },
    });

    if (!created) return res.json({ msg: 'There is already an user with the email ' + email });

    res.json({ msg: 'User created!!!', user });
  } catch (error) {
    res.json({ msg: "Please check de information you're trying to insert" });
  }
};

exports.loginUser = async (req, res) => {
  const { type, email, password } = req.body;
  const where = type === 'email' ? { email, password } : { email };

  try {
    const user = await User.findOne({ where });

    if (!user) return res.json({ msg: false });

    res.json({
      msg: true,
      id: user.id,
      username: user.username,
      picture: user.picture,
      type: 'user',
    });
  } catch (error) {
    res.json({ msg: 'error' });
  }
};
