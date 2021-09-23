const Promoter = require ('../../database/models/Promoter');
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op;

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
                [Op.or]:[              
                    {email},
                    {tax_id},
                    {phone},
                    {legal_name}]
            },
            defaults:{
                email,
                tax_id,
                phone,
                legal_name,
                business_name,
                promoter_name,
                password,
                business_type,
                address,
            },
        });
        if(!created){
            return res.json({created:false}); 
        }else {
            return res.json({
                created:true,
            }) ;
            
        }
    }catch(error){
        res.json({error:error.errors[0]});
    }
}