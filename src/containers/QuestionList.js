import React from 'react';
import Question from '../components/Question'

class QuestionList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      value: null,
      domain: null
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit(payload) {
    this.setState({...payload})
  }

  render(){
    console.log(this.state);
    let questions = this.props.questions.map (question => {

      return (
        <Question
          key={question.num}
          id={question.num}
          text={question.text}
          domain={question.domain}
          handleClick={this.handleQuestionClick}
          handleFormSubmit={this.handleFormSubmit}
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
