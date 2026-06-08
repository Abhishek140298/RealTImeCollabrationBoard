import React,{createContext, useState} from 'react'


export const BoardContext=createContext(null)
const BoardContextProvider=({children})=>{
    const [board,setBoard]=useState(["Frontend"])
    const [task,setTask]=useState()
    const [boardID,setBoardId]=useState()


    return(<BoardContext.Provider value={{board,setBoard,task,setTask,setBoard,boardID}}>
        {children}
    </BoardContext.Provider>)
}

export default BoardContextProvider