const Comment = require('../../database/models/Comment');

exports.postComment = async (req, res) => {
  const { review, rating, user_id, event_id } = req.body;

  try {
    const insert = await Comment.create({ review, rating });

    await insert.setUser(user_id);
    await insert.setEvent(event_id);

    res.json({ msg: 'comment created', insert });
  } catch (error) {
    res.json({ msg: 'error' });
  }
};
