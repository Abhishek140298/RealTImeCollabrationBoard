const express =require('express')

const router=express.Router()


const {getBoards,createBoards,getSignleBoardById}=require('../controllers/boardController')

router.get('/',getBoards)
router.post('/',createBoards)
router.get('/:id',getSignleBoardById)

module.exports=router