import React from 'react';
import Score from '../components/Score.js';
import styled from 'styled-components'

const StyledScore = styled.div`
  color: #6A5ACD;
`


class ScoreDisplay extends React.Component {
  constructor(){
    super()
    this.state = {
      score: {}
    }
    // this.domainDisplay = this.domainDisplay.bind(this)
  }

  // domainDisplay = Object.keys()

  render(){
    return(
      <StyledScore>
        <Score score={this.props.score.O} domain={"Openness to New Experiences"} />
        <Score score={this.props.score.C} domain={"Conscientiousness"}/>
        <Score score={this.props.score.E} domain={"Extroversion"}/>
        <Score score={this.props.score.A} domain={"Agreeableness"}/>
        <Score score={this.props.score.N} domain={"Neuroticism"}/>
      </StyledScore>
    )
  }
}

export default ScoreDisplay;
