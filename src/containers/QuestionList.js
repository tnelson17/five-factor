import React from 'react';
import Question from '../components/Question'

const QuestionList = props => {
  let questions;
  questions = props.questions.map (question => {
    return (
      <Question
        key={question.id}
        id={question.id}
        text={question.text}
        choices={question.choices}
      />
    )
  })
  return (
    <div>
      {questions}
    </div>
  );
}

export default QuestionList;
