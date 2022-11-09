const asyncHandler = require('express-async-handler')


// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler( async(req,res) => {
    res.status(200).json({message:'Get goals'})

})
// @desc Set goal
// @route Set /api/goal
// @access Private
const setGoal = asyncHandler( async (req,res) => {
    if(!req.body.text){
        res.status(400).json({message:'Please add a text fiels'})

    }
    res.status(200).json({message:'Set goal'})

})
// @desc update goal
// @route put /api/goal
// @access Private
const putGoal = asyncHandler( async (req,res) => {
    res.status(200).json({message:`update goal ${req.params.id}` })

})
// @desc delete goal
// @route DELETE /api/goal
// @access Private
const deleteGoal = asyncHandler(async (req,res) => {
    res.status(200).json({message:`Delete goal ${req.params.id}` })

})
module.exports = {
    getGoals,
    setGoal,
    putGoal,
    deleteGoal,
}