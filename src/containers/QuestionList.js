import React from 'react';
import Question from '../components/Question';
import styled from 'styled-components'

const StyledQuestion = styled.div`
  color: #6A5ACD;
`

class QuestionList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      chosen: false,
      questions: {}
    };
    this.handleQuestionSubmit = this.handleQuestionSubmit.bind(this)
    this.submitForm = this.submitForm.bind(this)
    this.chooseLongTest = this.chooseLongTest.bind(this)
    this.chooseShortTest = this.chooseShortTest.bind(this)
  }

  chooseLongTest(){
    this.setState({ chosen: true, ...this.state.questions })
  }

  chooseShortTest(){

  }

  componentDidMount(){
    let questionsArray = this.props.questions.map((question, index) => {
      return ({id: index, value: '', domain: ''});
    });
    let questionsObject = Object.assign({}, questionsArray);
    this.setState({
      questions: questionsObject });
  }

  handleQuestionSubmit(payload) {
    this.setState({
      questions: {
        ...this.state.questions,
        [payload.id]: {...payload}
      }
    });
  }

  submitForm(data) {
    let payload = {
      O: 0,
      C: 0,
      E: 0,
      A: 0,
      N: 0
    }
    let idArray = Object.keys(this.state.questions)
    idArray.forEach((id, index) => {
      payload[this.state.questions[index].domain] += parseInt(this.state.questions[index].value)
    })
    this.props.handleFormSubmit(payload)
  }

  render(){
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
      <StyledQuestion>
          {this.state.chosen?(
            <>
              {questions}
              <button onClick={this.submitForm}>Submit</button>
            </>
          ):(
            <>
              <button onClick={this.chooseLongTest}>Long Test</button>
              <button>Short Test</button>
            </>
          )
          }
      </StyledQuestion>
    );
  }
}

export default QuestionList;
