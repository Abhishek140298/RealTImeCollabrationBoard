import React,{createContext, useState} from 'react'


export const BoardContext=createContext(null)
const BoardContextProvider=({children})=>{
    const [board,setBoard]=useState(["Frontend"])

    return(<BoardContext.Provider value={{board,setBoard}}>
        {children}
    </BoardContext.Provider>)
}

export default BoardContextProvider