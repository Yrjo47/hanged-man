import React from 'react'
import {Link} from 'react-router-dom'
import './PlayButtons.css'

const PlayButtons = () => {
  return (
    <div id='playButtons'>
        <Link to='/play/multiplayer'><button id="multiplayerButton">I have friends to play with</button></Link>
        <Link to='/play/computer'><button id="computerButton">Play alone</button></Link>
    </div>
  )
}

export default PlayButtons