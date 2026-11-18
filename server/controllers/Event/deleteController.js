const Event = require('../../database/models/Event');

exports.deleteController = async (req, res) => {
  try {
    await Event.destroy({ where: { id: req.params.id } });
    res.send('Activity Deleted');
  } catch (error) {
    res.json(error);
  }
};
