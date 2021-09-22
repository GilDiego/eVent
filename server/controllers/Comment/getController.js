const Comment = require('../../database/models/Comment');
const User = require('../../database/models/User');


// exports.getAllComments = (req, res) => {

//     Comment.findAll({
//         include: User,

//     })
//         .then(result => {

//             res.json(result)
//         })
//         .catch(error => {
//             console.log(error);
//             res.json({ msg: 'error!!' })
//         })

// }

exports.getAllComments = async (req, res) => {
    try {
        // Fetches all comments
        const consult = await Comment.findAll({
            include: User,

        })
        // Sorts comments into arrays by rating
        console.log(consult)
        if (consult.length) {
            let result = {
                oneStar: [],
                twoStars: [],
                threeStars: [],
                fourStars: [],
                fiveStars: []
            }
            consult.forEach(comment => {
                switch (Number(comment.rating)) {
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

    } catch (e) {
        console.log(e);
        res.json({ msg: 'error!!' })
    }

}


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

// exports.getSomeComments = async (req, res) => {
    //     const { id } = req.query;

    //     // switch with 5 cases. conditional to fill array with varied comments.


    // }
    // exports.getAllComments = async (req, res) => {

    //     const consult = await Comment.findAll({
    //         include: User,

    //     })

    //     if (!consult.length > 4) {
    //         let lowRating = []
    //         let highRating = []
    //         consult.forEach(comment => Number(comment.rating) > 3 ? 
    //             highRating.push(Number(comment.rating)) 
    //             : 
    //             lowRating.push(Number(comment.rating))
    //         )
    //         res.json('hola')
    //     }
    //     else res.json(consult)

    //         .catch(error => {
    //             console.log(error);
    //             res.json({ msg: 'error!!' })
    //         })

    // }