const Event = require('../../database/models/Event');
const Comment = require('../../database/models/Comment');


exports.getController = async (req,res) => {

    const consult = await Event.findAll();

    const result = consult.map(event => {
        const { dataValues } = event;

        const {
            id,
            name,
            price,
            location,
            pictures
        } = dataValues;

        return {
            id,
            name,
            price,
            location,
            pictures
        };
    })

    res.json(result)
}

exports.getEventByIdController = async (req,res) => {
    const {id} = req.params;


    try {
        const consult = await Event.findOne({
            where: {
                id
            },
            include:Comment
        });
    
        const result = consult;

        if(!result) return res.json({msg:'ID does not match with any event'});
        
        res.json({
            msg:`Search ID: ${id} Success!`,
            result
        });
        
    } catch (error) {
        console.log(error);
        res.json({msg:'Error!!'});
    }

    
}

exports.getElementByCountryAndCity = (req,res) => {
    
    const { country, city } = req.query;
    

    if(country && city){
        return res.json(
            {
                msg:`Country: ${country}   City: ${city}`
            }
        )
    }

    if(country){
        return res.json({msg:`Country: ${country}`})
    }

    if(city){
        return res.json({msg:`City: ${city}`})
    }

    res.json({msg:'no data sent'})
}