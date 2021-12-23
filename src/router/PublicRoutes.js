import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PublicRoutes = ({children}) => {
    const {logged} = useSelector(state => state.login)
    return logged ? <Navigate to= '/' /> : children
    
}

export default PublicRoutes
