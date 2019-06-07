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
    let maxDomainScore = (this.props.testLength / 5) * 4
    return(
      <StyledScore>
        <Score score={this.props.score.O} domain={"Openness to Experience"} max={maxDomainScore}/>
        <Score score={this.props.score.C} domain={"Conscientiousness"} max={maxDomainScore}/>
        <Score score={this.props.score.E} domain={"Extroversion"} max={maxDomainScore}/>
        <Score score={this.props.score.A} domain={"Agreeableness"} max={maxDomainScore}/>
        <Score score={this.props.score.N} domain={"Neuroticism"} max={maxDomainScore}/>
      </StyledScore>
    )
  }
}

export default ScoreDisplay;
