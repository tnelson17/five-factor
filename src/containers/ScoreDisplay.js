import React from 'react';
import Score from '../components/Score.js';

class ScoreDisplay extends React.Component {
  constructor(){
    super()
    this.state = {
      score: {}
    }
  }
  
  render(){
    return(
      <>
        <Score score={this.props.score.O} />
        <Score score={this.props.score.C} />
        <Score score={this.props.score.E} />
        <Score score={this.props.score.A} />
        <Score score={this.props.score.N} />
      </>
    )
  }
}

export default ScoreDisplay;
