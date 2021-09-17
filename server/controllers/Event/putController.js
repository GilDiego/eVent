const Event = require('../../database/models/Event');

exports.putController = async (req, res) => {
    const { id } = req.params;
    const { name, price, location, pictures } = req.body;
    try {
        const result = await Event.update({
            name: name,
            price: price,
            location: location,
            pictures: pictures
        }, {
            where: {
                id: id
            }
        })
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}