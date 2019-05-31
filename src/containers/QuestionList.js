import React from 'react';
import Question from '../components/Question';
import styled from 'styled-components';
const sampleSize = require('lodash.samplesize');

const StyledQuestion = styled.div`
  color: #6A5ACD;
`

class QuestionList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      chosen: false,
      questions: {},
      questionsArray: []
    };
    this.handleQuestionSubmit = this.handleQuestionSubmit.bind(this)
    this.submitForm = this.submitForm.bind(this)
    this.chooseLongTest = this.chooseLongTest.bind(this)
    this.chooseShortTest = this.chooseShortTest.bind(this)
  }

  chooseLongTest(){
    let questionsArray = this.props.questions.map((question, index) => {
      return ({id: index, value: '', domain: ''});
    });
    let questionsObject = Object.assign({}, questionsArray);
    this.setState({
      chosen: true,
      questions: questionsObject,
      questionsArray: this.props.questions
    });
  }

  chooseShortTest(){
    let o = this.props.questions.filter(question => question.domain === "O")
    let c = this.props.questions.filter(question => question.domain === "C")
    let e = this.props.questions.filter(question => question.domain === "E")
    let a = this.props.questions.filter(question => question.domain === "A")
    let n = this.props.questions.filter(question => question.domain === "N")
    let questionsArray = []
      .concat
      .apply([], [sampleSize(o, 6), sampleSize(c, 6), sampleSize(e, 6), sampleSize(a, 6), sampleSize(n, 6)])
      .sort((a, b) => a.num - b.num)
      let questionsObject = Object.assign({},
        questionsArray.map((question, index) => {
          return ({id: index, value: '', domain: ''});
        })
      )
      this.setState({
        chosen: true,
        questions: questionsObject,
        questionsArray: questionsArray
      });
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
    let questions = this.state.questionsArray.map ((question, index) => {
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
              <button onClick={this.chooseShortTest}>Short Test</button>
            </>
          )
          }
      </StyledQuestion>
    );
  }
}

export default QuestionList;
