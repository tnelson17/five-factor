import React from 'react';

const Question = props => {
  return (
    <>
      <div> {props.text} </div>
      <select onChange={props.handleClick} name={props.domain}>
        <option>---</option>
        <option value={5}>Strongly Agree</option>
        <option value={4}>Moderately Agree</option>
        <option value={3}>Neither Agree nor Disagree</option>
        <option value={2}>Moderately Disagree</option>
        <option value={1}>Strongly Disagree</option>
      </select>
    </>
  )
}

export default Question;
