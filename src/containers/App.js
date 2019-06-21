import React from 'react';
import styled from 'styled-components';
import QuestionList from './QuestionList';
import ScoreDisplay from './ScoreDisplay';
import data from '../data.json'

const Title = styled.h2`
  text-align: center;
  margin: 0;
  padding-top: 10px;
  padding-right: 10px;
  color: #0000CD;
`

const SubTitle = styled.h5`
  font-style: italic;
  text-align: center;
  color:#0000CD;
`

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      submitted: false,
      score: {},
      testLength: 0
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.backButton = this.backButton.bind(this)
  }

  handleFormSubmit(payload) {
    this.setState({
      submitted: true,
      score: payload.score,
      testLength: payload.testLength
    })
  }

  backButton() {
    this.setState({
      submitted: false,
      score: {}
    })
  }

  render() {
    return (
      <div>
        <Title> knOw-CEAN </Title>
        <SubTitle>
          It's not the lies of the MBTI,
          it's the notion of the OCEAN
        </SubTitle>
        {this.state.submitted?(
          <>
            <ScoreDisplay
              score = {this.state.score}
              testLength = {this.state.testLength}
            />
            <button onClick={this.backButton}>Back</button>
          </>
        ):(
          <QuestionList
            handleFormSubmit = {this.handleFormSubmit}
            questions = {data}
          />
        )}
      </div>
    );
  }
};

export default App;
