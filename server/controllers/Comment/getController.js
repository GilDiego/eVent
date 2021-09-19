const Comment = require('../../database/models/Comment');
const User = require('../../database/models/User');


exports.getAllComments = (req,res) => {

    Comment.findAll({
        include:User,
        
    })
        .then(result => {

            res.json(result)
        })
        .catch(error => {
            console.log(error);
            res.json({msg:'error!!'})
        })

}