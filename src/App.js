import './App.css';
import React, { useState } from 'react'
import QuestionItem from './QuestionItem';

function App() {
  let info = [
    "Hi",
    "Test",
    "Bye"
  ]

  let question1 = {
    question: "How are you?",
    answer: "Great!"
  }
  let question2 = {
    question: "what is today?",
    answer: "Saturday"
  }
  let question3 = {
    question: "What's your name?",
    answer: "Andjela"
  }

  let questions = [question1, question2, question3]

  const words = info.map(word => {
    return <h1>{word}</h1>
  })

  let questionList = questions.map(q => {
    return <QuestionItem question={q.question} answer={q.answer} />
  })

  return (
    <div className="App">
      {words}
      {questionList}
    </div>
  );
}

export default App;

