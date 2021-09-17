const Event = require('../../database/models/Event');

exports.deleteController = async (req, res) => {
    const { id } = req.params;
    try {
     await Event.destroy({
        where: {
            id
        }
    })
    res.send('Activity Deleted')
    } catch (error) {
        res.json(error)
    }
}
