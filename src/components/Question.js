import React from 'react';

const Question = props => {
  // let choices = props.choices.map(choice => {
  //   return (
  //     <div>
  //       <p>{choice.key}</p>
  //       <p>{choice.choices}</p>
  //     </div>
  //   )
  // })
  return (
    <div>
      <span> {props.text} </span>
    </div>
  )
}

export default Question;
