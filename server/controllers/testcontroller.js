const Show  = require('../database/models/Show')

exports.controller =  (req, res) => {

   Show.create({
        eventName: 'Rock al parque',
    }).then(evento => {
        res.json(evento)
    })

    // res.json({ msg: 'Hola aqui probando'})
}

exports.controller3 = (req,res) => {
    res.json({msg: 'Aqui probando el controller 3'})
}