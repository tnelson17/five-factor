import React from 'react';
import Score from '../components/Score.js';
import styled from 'styled-components'

const StyledScore = styled.div`
  color: #0000CD;
`


class ScoreDisplay extends React.Component {
  constructor(){
    super()
    this.state = {
      score: {}
    }
  }


  render(){
    return(
      <StyledScore>
        <Score score={this.props.score.O} domain={"Openness to Experience"} />
        <Score score={this.props.score.C} domain={"Conscientiousness"}/>
        <Score score={this.props.score.E} domain={"Extroversion"}/>
        <Score score={this.props.score.A} domain={"Agreeableness"}/>
        <Score score={this.props.score.N} domain={"Neuroticism"}/>
      </StyledScore>
    )
  }
}

export default ScoreDisplay;
