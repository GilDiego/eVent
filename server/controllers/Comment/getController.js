const Comment = require('../../database/models/Comment');
const User = require('../../database/models/User');

const STAR_LEVELS = [1, 2, 3, 4, 5];

const groupByStars = (comments) =>
  STAR_LEVELS.map((star) => ({
    ['star' + star]: comments.filter((comment) => parseInt(comment.rating, 10) === star),
  }));

const averageRating = (comments) => {
  if (!comments.length) return 0;
  const sum = comments.reduce((total, comment) => total + Number(comment.rating), 0);
  return Math.floor(sum / comments.length);
};

exports.groupByStars = groupByStars;
exports.averageRating = averageRating;

exports.getAllComments = async (req, res) => {
  const { id } = req.query;

  try {
    const comments = await Comment.findAll({
      ...(id && { where: { eventId: id } }),
      include: User,
    });

    res.json(comments.length ? groupByStars(comments) : comments);
  } catch (error) {
    res.json({ msg: 'error!!' });
  }
};

exports.getFormattedComments = async (req, res) => {
  const { id } = req.query;

  if (!id) return res.status(400).json({ msg: 'No id provided.' });

  try {
    const comments = await Comment.findAll({ where: { eventId: id }, include: User });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ msg: 'error!!' });
  }
};

exports.getGeneralRating = async (req, res) => {
  try {
    const comments = await Comment.findAll({ where: { eventId: req.query.id } });
    res.json(averageRating(comments));
  } catch (error) {
    res.json({ msg: 'error!!' });
  }
};
