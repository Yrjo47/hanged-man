import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav id="app-nav">
        <Link to='/' id="homeButton">Go home</Link>
        <div id="userButtons">
            <Link to='/login' id="loginButtons">Log in</Link>
            <Link to='/signup'>Sign up</Link>
            <Link to='/leaderboard' id="leaderBoardButton">Leaderboard</Link>
            <Link to='profile' id="profileButton">Profile</Link>
        </div>
    </nav>
  )
}

export default Navbar