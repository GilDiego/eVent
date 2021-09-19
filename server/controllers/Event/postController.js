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

exports.saveInfoPromotor = async (req,res) =>{
    console.log(req.body)
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
    } = req.body.form;

    try{
        const [promoter,created] = await Promoter.findOrCreate({
            where:{
                //¿la tabla deberia tener tipo de identificacion segun el pais?, por si se repiten en paises distintos
                tax_id
            },
            defaults:{
                legal_name,
                business_name,
                promoter_name,
                phone,
                email,
                password,
                business_type,
                address,
            },
        });
        if(!created){
            return res.json({msg:'Exist'}); 
        }else {
            return res.json({
                msg:'Created',
                promoter,
            }) ;
            
        }
    }catch(error){
        res.json({msg:'Error'});
    }
}