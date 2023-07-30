import React from 'react'
import { useState } from 'react'
import './GameField.css'
import modifySecretWord from './helpers/modifySecretWord'
import UsedLetter from './components/UsedLetter'

const GameField = () => {

const word = 'modification'.toUpperCase()

const [letter, setLetter] = useState('')
const [usedLetters, setUsedLetters] = useState([])
const [secretWord, setSecretWord] = useState('_ '.repeat(word.length - 1) + '_')
const [guessedWrong, setGuessedWrong] = useState(0)
const [guessedRight, setGuessedRight] = useState(0)


const Guess = () => {
    if (letter.match(/[A-Z]/i) && !(usedLetters.some(e => e.letter === letter)) && guessedWrong !== 5){
      if (word.includes(letter)){
        setSecretWord(modifySecretWord(word, secretWord, letter))
        setUsedLetters([...usedLetters, {'letter': letter, 'isWrong': false}])
        setGuessedRight(guessedRight + 1)
      }
      else {
        setUsedLetters([...usedLetters, {'letter': letter, 'isWrong': true}])
        setGuessedWrong(guessedWrong + 1)
      }
      console.log(letter)
      setLetter('')
      document.getElementById('guessInput').value = ''
    }
}

const handleKeyDown = (e) => {
    if (e.keyCode === 13){
        Guess()
    }
}
  return (
    <div className='field-container'>
      <h2 style={(guessedWrong !== 5) ? {'display': 'none'} : {}} className="looseScreen">
        You are dumb!
      </h2>
      <h2 className='used-letters'>Letters used: {usedLetters.map((e) => {
        return(<UsedLetter letter={e.letter} isWrong={e.isWrong}/>)
      })}</h2>
      <h3 className='secret-word'>Word to guess: <br/>{secretWord}</h3>
      <div className='guess-section'>
        <input id='guessInput' className='letter-input' type="text" placeholder='E' maxLength={1}  onKeyDown={handleKeyDown} onChange={(e) => {setLetter(e.target.value.toUpperCase())}}/>
        <button className='guess-btn' onClick={Guess}>Guess</button>
      </div>
    </div>
  )
}

export default GameField