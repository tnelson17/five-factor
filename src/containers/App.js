import React from 'react';
import styled from 'styled-components';
import QuestionList from './QuestionList';
import ScoreDisplay from './ScoreDisplay';
import data from '../data.json';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const InfoCard = styled.div`
  position: absolute;
  top: 10%;
  width: 60%;
  margin-left: 20%;
  background-color: rgba(255, 255, 255, 0.8);
  border: solid;
  border-color: #81aaff;
  border-width: 5px;
  border-radius: 10px;
  background-image: linear-gradient(to bottom right, white, #afddff);
`

const Title = styled.h1`
  text-align: center;
  margin: 0;
  padding-top: 10px;
  padding-right: 10px;
  color: #0000CD;
`

const SubTitle = styled.h3`
  font-style: italic;
  text-align: center;
  color:#0000CD;
`

const StyledBackButton = styled.button `
  color: #0000CD;
  margin-left: 44%;
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
      <InfoCard>
        <Title> knOw-CEAN </Title>
        <SubTitle>
          Know the notion of your OCEAN!
        </SubTitle>
        {this.state.submitted?(
          <>
            <ScoreDisplay
              score = {this.state.score}
              testLength = {this.state.testLength}
            />
            <StyledBackButton onClick={this.backButton}>Back</StyledBackButton>
          </>
        ):(
          <BrowserRouter>
            <Route
              exact path='/something'
              render={(props) => <QuestionList {...props} handleFormSubmit = {this.handleFormSubmit}
              questions = {data} />}
            />
          </BrowserRouter>
        )}
      </InfoCard>
    );
  }
};

export default App;
