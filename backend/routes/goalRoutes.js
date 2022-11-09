const express = require('express')
const router = express.Router()
const {GetGoals, getGoals,setGoal,putGoal,deleteGoal} = require('../controllers/getController')


router.get('/', getGoals)
router.post('/', setGoal)
router.put('/:id', putGoal)
router.delete('/', deleteGoal)


module.exports = router