import React from 'react'
import { Navigate } from 'react-router-dom'

const PublicRoute=({isAuthenticated=false,children})=>{
    if(isAuthenticated){
        console.log("sbsh")
        return <Navigate to='/' replace/>
    }
     return children

}

export default PublicRoute