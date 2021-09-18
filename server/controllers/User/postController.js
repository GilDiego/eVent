const User = require('../../database/models/User');


exports.postUser = (req,res) => {
    res.json(req.body)
}