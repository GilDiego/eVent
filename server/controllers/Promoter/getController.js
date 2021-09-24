const Promoter = require ('../../database/models/Promoter');

exports.getAllPromoters = async (req,res) => {
    try {
        Promoter.findAll()
            .then(promoters => {res.json(promoters)})
            .catch(error => {
                console.log(error)
                res.json({msg:`There has been an error during the consult or There isn't any promoter saved yet`})
            })

    } catch (error) {
        console.log(error)
        return res.json({msg:`There has been an error during the consult or There isn't any promoter saved yet`})
    }  
}