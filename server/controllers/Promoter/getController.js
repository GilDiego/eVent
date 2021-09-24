const Promoter = require ('../../database/models/Promoter');
const Event =require('../../database/models/Event');

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

//Get Eventos por promotor
exports.getEventPromoter = async (req,res) => {
    const {id} = req.params
    try{
        const eventPromotor = Promoter.findOne({
            where:{id},
            include:Event,
        });
        res.json({
            error:false,
            eventPromotor
        })
    }catch(error){
        res.json({error:true})
    }
    
} 