const db = require('../module/index');

// model
const Leaves = db.leaves;

// functions

//1. Add Review

const addLeave = async (req, res) => {

    const id = req.params.id

    let data = {
        Employee_id: id,
        LeavesDates: req.body.LeavesDates,
        LeaveReason:req.body.LeaveReason
    }

    const leaves = await Leaves.create(data);
    res.status(200).send(leaves)

}

// 2. Get All Reviews

// const getAllReviews = async (req, res) => {

//     const reviews = await Review.findAll({})
//     res.status(200).send(reviews)

// }

module.exports = {
    addLeave  //,
   // getAllReviews
}