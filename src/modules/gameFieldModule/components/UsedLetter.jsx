import React, { useState } from 'react'

const UsedLetter = ({letter, isWrong}) => {

  return (
    <span style={isWrong ? {'color': 'red'} : {'color': 'green'}}> {`${letter} `} </span>
  )
}

export default UsedLetter