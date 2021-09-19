const Promoter = require ('../../database/models/Promoter');

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