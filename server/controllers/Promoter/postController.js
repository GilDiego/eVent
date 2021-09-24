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
        res.json({msg:'No se pudo crear'});
    }
}



//*________________________________________________________________________________________
exports.loginPromoter =  (req, res) => {
    const { type, email, password } = req.body;
    if (type === 'email'){
        Promoter.findOne({
            where: {
                email,
                password
            }
        }).then(promoter =>{
            if (promoter) return res.json({
                msg: true,
                id: promoter.id,
                business_name: promoter.business_name,
                promoter_name:promoter.promoter_name, 
                picture: "https://cdn2.vectorstock.com/i/thumb-large/04/96/user-icon-vector-19240496.jpg",
                business_type: promoter.business_type,
                type: 'promoter'
            });
            else return res.json({ msg: false })
        }).catch(error => {
            console.log(error);
            res.json({ msg: 'error' });
        })
    } else
        Promoter.findOne({
            where: {
                email
            }
        }).then(promoter => {
            if (promoter) return res.json({
                msg: true,
                id: promoter.id,
                business_name: promoter.business_name,
                promoter_name:promoter.promoter_name, 
                picture: promoter.picture,
                business_type: promoter.business_type,
                type: 'promoter'
            });
            else return res.json({ msg: false })
        }).catch(error => {
            console.log(error);
            res.json({ msg: 'error' });
        })
}