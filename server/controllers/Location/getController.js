const Event = require('../../database/models/Event');
const Location = require('../../database/models/Location');

exports.getAllLocations = async (req, res) => {
  try {
    const locations = await Location.findAll({
      include: {
        model: Event,
        attributes: ['id', 'name', 'price', 'pictures', 'tags', 'age_rating', 'weekdays'],
      },
    });
    res.json(locations);
  } catch (error) {
    res.status(500).json({ msg: 'Error!!' });
  }
};
