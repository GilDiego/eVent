const Event = require('../../database/models/Event');
const Promoter = require ('../../database/models/Promoter');

exports.saveInfoEvent = async (req,res) => {
    const { 
        name,           description,    starring,   virtual,        location,   
        address,        pictures,       start_date, finish_date,    schedule,   
        isRecurrent,    weekdays,       tags,       age_rating,     price,  
        ticket_limit
    } = req.body;

    try {
        const [event,created] = await Event.findOrCreate({
            where:{
                name
            },
            defaults:{
            name,           description,    starring,   virtual,        location,   
            address,        pictures,       start_date, finish_date,    schedule,   
            isRecurrent,    weekdays,       tags,       age_rating,     price,  
            ticket_limit
            }
        });
    
        if(!created){
            return res.json({msg:'The event name already exists'})
        } else {
            return res.json({
                msg:'Event created!!!',
                event
            }) 
        }
    
         
        
    } catch (error) {
        console.log(error);
        res.json({msg:'Please check the information'})
    }
      

}

