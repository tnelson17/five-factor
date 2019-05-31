import React from 'react';
import styled from 'styled-components'

const Score = (props) => {
  return (
      <div>Your score in the dimension of {props.domain} is {props.score}</div>
  )
}

export default Score;
