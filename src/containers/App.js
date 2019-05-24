import React from 'react';
import QuestionList from './QuestionList';
import ScoreDisplay from './ScoreDisplay';
import data from '../data.json'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      submitted: false,
      score: {}
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit(payload) {
    this.setState({
      submitted: true,
      score: payload
    })
  }


  render() {
    return (
      <div>
        <h2> Five Factor </h2>
        {this.state.submitted?(
          <ScoreDisplay />
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
