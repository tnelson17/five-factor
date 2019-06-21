import React from 'react';
import Question from '../components/Question';
import styled from 'styled-components';
const sampleSize = require('lodash.samplesize');

const StyledQuestion = styled.div`
  color: #0000CD;;
  font-weight: bolder;
  text-align: center;
`

class QuestionList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      chosen: false,
      questions: {},
      questionsArray: [],
      questionIndex: 0,
      max: 0
    };
    this.handleQuestionSubmit = this.handleQuestionSubmit.bind(this)
    this.submitForm = this.submitForm.bind(this)
    this.chooseLongTest = this.chooseLongTest.bind(this)
    this.chooseShortTest = this.chooseShortTest.bind(this)
    this.nextQuestion = this.nextQuestion.bind(this)
  }

  chooseLongTest(){
    let questionsArray = this.props.questions.map((question, index) => {
      return ({id: index, value: '', domain: ''});
    });
    let questionsObject = Object.assign({}, questionsArray);
    this.setState({
      chosen: true,
      questions: questionsObject,
      questionsArray: this.props.questions,
      max: this.props.questions.length - 1
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
        questionsArray: questionsArray,
        max: questionsArray.length - 1
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

  nextQuestion() {
    this.setState({ questionIndex: this.state.questionIndex + 1})
  }

  submitForm(data) {
    let idArray = Object.keys(this.state.questions)
    let payload = {
      'score': {
        O: 0,
        C: 0,
        E: 0,
        A: 0,
        N: 0
      },
      'testLength': idArray.length
    }
    idArray.forEach((id, index) => {
      payload.score[this.state.questions[index].domain] += parseInt(this.state.questions[index].value)
    })
    this.props.handleFormSubmit(payload)
  }

  render(){
    console.log(this.state.questionsArray);
    let question;
    let button;
    if (this.state.questionsArray.length) {
      let questionData = this.state.questionsArray[this.state.questionIndex]
      question =
        <Question
          key={questionData.num}
          id={this.state.questionIndex}
          text={questionData.text}
          domain={questionData.domain}
          handleQuestionSubmit={this.handleQuestionSubmit}
        />
    }
    if (this.state.questionIndex === this.state.max) {
      button = <button onClick={this.submitForm}>Submit</button>
    } else {
      button = <button onClick={this.nextQuestion}>Next</button>
    }

    return (
      <StyledQuestion>
          {this.state.chosen?(
            <>
              {question}
              {button}
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
