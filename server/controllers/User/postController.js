const User = require('../../database/models/User');


exports.postUser = async (req,res) => {

    const { first_name, last_name,  username,   password,
            birthdate,  picture,    email,      phone } = req.body;

    try {

        const [user,created] = await User.findOrCreate({
            where: {
                email
            },
            defaults:{
                first_name, last_name,  username,   password,
                birthdate,  picture,    email,      phone
            }
        });

        if(created){
            return res.json({
                msg:'User created!!!',
                user
            });
        } else {
            return res.json({msg:`There is already an user with the email ${email}`})
        }
        
    } catch (error) {
        console.log(error)
        res.json({msg:`Please check de information you're trying to insert`});
    }
}

exports.loginUser = (req,res) => {
    const { email } = req.body;

    User.findOne({
        where:{
            email
        }
    }).then(user => {

        if(user) return res.json({msg:true});
        else return res.json({msg:false})

    }).catch(error => {
        console.log(error);
        res.json({msg:'error'});
    })
}