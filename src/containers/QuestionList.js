import React from 'react';
import Question from '../components/Question'

class QuestionList extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.handleQuestionSubmit = this.handleQuestionSubmit.bind(this)
  }
  componentDidMount(){
    let questionsArray = this.props.questions.map((question, index) => {
      return ({id: index, value: '', domain: ''});
    });
    let questionsObject = Object.assign({}, questionsArray);
    this.setState({ questions: questionsObject });
  }

  handleQuestionSubmit(payload) {
    this.setState({
      questions: {
        ...this.state.questions,
        [payload.id]: {...payload}
      }
    });
  }

  mapQuestions(){
    let questions = this.props.questions.map ((question, index) => {
      return (
        <Question
          key={question.num}
          id={index}
          text={question.text}
          domain={question.domain}
          handleClick={this.handleQuestionClick}
          handleQuestionSubmit={this.handleQuestionSubmit}
        />
      )
    });
    return (
      <div>
        {questions}
      </div>
    );
  };

  render(){
    return (
      this.mapQuestions()
    );
  }
}

export default QuestionList;
