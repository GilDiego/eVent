const User = require('../../database/models/User');


exports.getAllUsers = async (req,res) => {

    try {
        User.findAll()
            .then(user => {res.json(user)})
            .catch(error => {
                console.log(error)
                res.json('error')
            })

    } catch (error) {
        console.log(error)
        return res.json({msg:`There has been an error during the consult or There isn't any user saved yet`})
    }

    
}