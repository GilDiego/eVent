const { Op } = require('sequelize');
const Promoter = require('../../database/models/Promoter');

exports.saveInfoPromotor = async (req, res) => {
  const {
    legal_name,
    business_name,
    tax_id,
    promoter_name,
    phone,
    email,
    password,
    business_type,
    address,
    picture,
  } = req.body;

  try {
    const [promoter, created] = await Promoter.findOrCreate({
      where: { [Op.or]: [{ email }, { tax_id }, { phone }, { legal_name }] },
      defaults: {
        email,
        tax_id,
        phone,
        legal_name,
        business_name,
        promoter_name,
        password,
        business_type,
        address,
        picture,
      },
    });

    if (!created) return res.json({ created: false });

    res.json({ created: true, promoter });
  } catch (error) {
    res.json({ msg: 'No se pudo crear' });
  }
};

exports.loginPromoter = async (req, res) => {
  const { type, email, password } = req.body;
  const where = type === 'email' ? { email, password } : { email };

  try {
    const promoter = await Promoter.findOne({ where });

    if (!promoter) return res.json({ msg: false });

    res.json({
      msg: true,
      id: promoter.id,
      business_name: promoter.business_name,
      promoter_name: promoter.promoter_name,
      picture: promoter.picture,
      business_type: promoter.business_type,
      type: 'promoter',
    });
  } catch (error) {
    res.json({ msg: 'error' });
  }
};
