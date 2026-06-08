import React,{useState,useContext, useEffect} from 'react'
import { BoardContext } from '../../Context/BoardContextProvider'
import { getBoard } from '../../api/boardApi'

const useBoard=(url)=>{
const {board,setBoard}=useContext(BoardContext)


const fetchBoards=async ()=>{
    const boards=await getBoard(url)
    setBoard(prev=>boards)
}
useEffect(()=>{
   fetchBoards()
},[])


return {boards:board}
}

export default useBoard