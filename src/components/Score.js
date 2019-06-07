import React from 'react';
import { O, C, E, A, N } from '../descriptions.js'

const Score = (props) => {
  return (
      <div>Your score in the dimension of {props.domain} is {props.score} out of {props.max}</div>
  )
}

export default Score;
