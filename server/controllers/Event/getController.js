
exports.getController = (req,res) => {
    res.json({msg:'probando el get de todos los eventos'})
}

exports.getEventByIdController = (req,res) => {
    const {id} = req.params;

    res.json({msg:`mensaje desde la busqueda por id ${id}`})
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