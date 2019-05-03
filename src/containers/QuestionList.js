import React from 'react';
import Question from '../components/Question'

class QuestionList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      O: 0,
      C: 0,
      E: 0,
      A: 0,
      N: 0
    }

    this.handleQuestionClick = this.handleQuestionClick.bind(this)
  }

  handleQuestionClick(event) {
    this.setState({ [event.target.name]: this.state[event.target.name] + parseInt(event.target.value) })
  }

  render(){
    console.log(this.state);
    let questions = this.props.questions.map (question => {

      return (
        <Question
          key={question.id}
          id={question.id}
          num={question.num}
          text={question.text}
          domain={question.domain}
          handleClick={this.handleQuestionClick}
        />
      )
    });

    return (
      <div>
        {questions}
      </div>
    );
  }
}

export default QuestionList;
