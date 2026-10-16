import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import Info from './Info'
import Login from './Login'
import Logout from './Logout'
import {useAuth} from './AuthContext'
import './Layout.css';

function Layout() {
  const {isAuthenticated} = useAuth()
  return (
    <>
    <header>
        <nav id='my-nav'>
            <Link to='/'>Home</Link>
            <Link to='/messages'>Messaggi</Link>
            <Link to='/info'>Info</Link>
            <Link to='/logout'>Logout</Link>
        </nav>
    </header>
    
       {isAuthenticated ? <main className='outlet'><Outlet className='outlet' /></main> : <Login />}
    
    </>
  )
}

export default Layout