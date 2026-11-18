const Promoter = require('../../database/models/Promoter');
const Event = require('../../database/models/Event');

exports.getAllPromoters = async (req, res) => {
  try {
    const promoters = await Promoter.findAll();
    res.json(promoters);
  } catch (error) {
    res.json({
      msg: "There has been an error during the consult or There isn't any promoter saved yet",
    });
  }
};

exports.getEventPromoter = async (req, res) => {
  try {
    const eventPromotor = await Promoter.findByPk(req.params.id, { include: [Event] });
    res.json({ error: false, eventPromotor });
  } catch (error) {
    res.json({ error: true });
  }
};
