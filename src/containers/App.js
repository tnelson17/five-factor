import React from 'react';
import QuestionList from './QuestionList';
import data from '../data.json'

const App = () => {
  return (
    <div>
      <h2> Five Factor </h2>
      <QuestionList
        questions = {data}
      />
    </div>
  );
};

export default App;
