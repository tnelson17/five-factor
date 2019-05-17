import React from 'react';
import QuestionList from './QuestionList';
import data from '../data.json'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      submitted: false,
      score: {}
    }
  }
  render() {
    return (
      <div>
        <h2> Five Factor </h2>
        <QuestionList
          questions = {data}
        />
      </div>
    );
  }
};

export default App;
