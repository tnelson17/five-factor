import React from 'react';
import Question from '../components/Question'

class QuestionList extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }
  componentDidMount(){
    let questionsArray = this.props.questions.map((question, index) => {
      return ({id: index, value: '', domain: ''});
    });
    let questionsObject = Object.assign({}, questionsArray);
    this.setState({ questions: questionsObject });
  }

  handleFormSubmit(payload) {
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
          handleFormSubmit={this.handleFormSubmit}
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
    console.log(this.state);
    return (
      this.mapQuestions()
    );
  }
}

export default QuestionList;
