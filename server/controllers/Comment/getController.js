const Comment = require('../../database/models/Comment');
const User = require('../../database/models/User');


// Diego: Si recibe un id de Evento por query, se hace una consulta de solo los comentarios
// que hagan match con ese ID. De lo contrario trae todos los comentarios. Luego separa todos
// los comentarios por rating y los envia en un objeto.
exports.getAllComments = async (req, res) => {

    const { id } = req.query;
    let consult;

    if (id) {
        try {
            consult = await Comment.findAll({
                where: {
                    eventId: id
                },
                include: User,
            })

        } catch (e) {
            console.log(e);
            res.json({ msg: 'error!!' })
        }
    }
    else {
        try {
            // Fetches all comments
            consult = await Comment.findAll({
                include: User,
            })

        } catch (e) {
            console.log(e);
            res.json({ msg: 'error!!' })
        }

    }
    // Sorts comments into arrays by rating
    if (consult.length) {
        let result = {
            oneStar: [],
            twoStars: [],
            threeStars: [],
            fourStars: [],
            fiveStars: []
        }
        consult.forEach(comment => {
            switch (parseInt(comment.rating)) {
                case 1:
                    result.oneStar.push(comment)
                    break;
                case 2:
                    result.twoStars.push(comment)
                    break;
                case 3:
                    result.threeStars.push(comment)
                    break;
                case 4:
                    result.fourStars.push(comment)
                    break;
                case 5:
                    result.fiveStars.push(comment)
                    break;
                default:
                    break;
            }
        })
        return res.json(result)
    }
    else {
        res.json(consult)
    }



}

// Obtiene los comentarios de un evento en particular y los promedia. Retorna un numero.
exports.getGeneralRating = async (req, res) => {

    const { id } = req.query;

    function findAvg(data) {
        if (!data.length) return 0
        else {
            let arr = []
            data.forEach(comment => arr.push(Number(comment.rating)))
            let quantity = arr.length
            let sum = arr.reduce((a, b) => a + b, 0)
            return Math.floor(sum / quantity)
        }
    }

    try {
        const consult = await Comment.findAll({
            where: {
                eventId: id
            }
        })

        res.json(findAvg(consult))

    } catch (e) {
        console.log(e);
        res.json({ msg: 'error!!' })
    }
}
