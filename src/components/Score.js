import React from 'react';
import descriptions from '../descriptions.js'

const Score = (props) => {
  let description = ''
  let percentScore = Math.round((props.score / props.max)*100)


    if (percentScore <= 20){
      description = descriptions[props.domainKey].low
    } else if (percentScore <= 40){
      description = descriptions[props.domainKey].moderateLow
    } else if (percentScore <= 60){
      description = descriptions[props.domainKey].moderate
    } else if (percentScore <= 80){
      description = descriptions[props.domainKey].moderateHigh
    } else {
      description = descriptions[props.domainKey].high
    }

  return (
    <>
      <div>Your score in the dimension of {props.domain} is {props.score} out of {props.max}</div>
      <div>{description}</div>
    </>
  )
}

export default Score;
