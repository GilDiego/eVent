const Event = require('../../database/models/Event');
const Comment = require('../../database/models/Comment');
const Location = require('../../database/models/Location');
const Promoter = require('../../database/models/Promoter');
exports.getController = async (req, res) => {
  try {
    const events = await Event.findAll({
      attributes: ['id', 'name', 'price', 'pictures', 'tags', 'age_rating', 'weekdays'],
      include: {
        model: Location,
        attributes: ['country', 'province', 'city'],
      },
    });
    res.json(events);
  } catch (error) {
    res.status(500).json({ msg: 'Error!!' });
  }
};
exports.getEventByIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const consult = await Event.findByPk(id, {
      include: [
        {
          model: Location,
          attributes: ['country', 'province', 'city'],
        },
        Comment,
        {
          model: Promoter,
          attributes: ['id', 'business_name', 'phone', 'picture'],
        },
      ],
    });
    if (!consult)
      return res.json({
        msg: 'ID does not match with any event',
      });
    res.json({
      msg: `Search ID: ${id} Success!`,
      consult,
    });
  } catch (error) {
    res.json({
      msg: 'Error!!',
    });
  }
};
exports.getElementByCountryAndCity = (req, res) => {
  const { country, city } = req.query;
  if (country && city) {
    return res.json({
      msg: `Country: ${country}   City: ${city}`,
    });
  }
  if (country) {
    return res.json({
      msg: `Country: ${country}`,
    });
  }
  if (city) {
    return res.json({
      msg: `City: ${city}`,
    });
  }
  res.json({
    msg: 'no data sent',
  });
};
