import React from 'react'
import {Link} from 'react-router-dom'
import './PlayButtons.css'

const PlayButtons = () => {
  return (
    <div id='playButtons'>
        <Link to='/play/online' id="multiplayerButton">I have friends to play with</Link>
        <Link to='/play/computer' id="computerButton">Play alone</Link>
    </div>
  )
}

export default PlayButtons