const Event = require('../../database/models/Event');
const Location = require('../../database/models/Location');
exports.saveInfoEvent = async (req, res) => {
  const {
    name,
    description,
    starring,
    virtual,
    ticket_limit,
    address,
    pictures,
    start_date,
    finish_date,
    schedule,
    isRecurrent,
    weekdays,
    tags,
    age_rating,
    price,
    country,
    city,
    region,
    promoter_id,
  } = req.body;
  try {
    const [event, created] = await Event.findOrCreate({
      where: {
        name,
      },
      defaults: {
        name,
        description,
        starring,
        virtual,
        ticket_limit,
        address,
        pictures,
        start_date,
        finish_date,
        schedule,
        isRecurrent,
        weekdays,
        tags,
        age_rating,
        price,
      },
    });
    if (!created) {
      return res.json({
        created: false,
      });
    }
    const location = await Location.findOrCreate({
      where: {
        country,
        province: region,
        city,
      },
    });
    await event.setLocation(location[0]);
    await event.setPromoter(promoter_id);
    return res.json({
      created: true,
      event,
    });
  } catch (error) {
    res.json({
      msg: 'Please check the information',
    });
  }
};
