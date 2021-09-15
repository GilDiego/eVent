const Evento  = require('../database/models/Evento')

exports.controller = async (req, res) => {

   Evento.create({
        eventName: 'Rock al parque',
    }).then(evento => {
        res.json(evento)
    })

    // res.json({ msg: 'Hola aqui probando'})
}

exports.controller3 = (req,res) => {
    res.json({msg: 'Aqui probando el controller 3'})
}