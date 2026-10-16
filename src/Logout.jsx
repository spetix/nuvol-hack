import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './AuthContext'

const Logout = () => {
  const { logout } = useAuth()

  useEffect(() => {
    logout() // rimuove il token e aggiorna isAuthenticated
  }, [])

  return <Navigate to='/login' replace />
}

export default Logout