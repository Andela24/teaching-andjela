import './App.css';
import React, { useEffect, useState } from 'react'
import QuestionItem from './QuestionItem';

function App() {
  const [count, setCount] = useState(0)
  const [formData, setFormData] = useState("")

  useEffect(() => {
    console.log('Hi')
    console.log("---")
  }, [count])

  let info = [
    "Hi",
    "Test",
    "Bye",
    "d"
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

  function handleClick() {
    setCount((count) => count + 1)
  }

  function handleChange(e) {
    setFormData(e.target.value)
  }

  return (
    <div className="App">
      {words}
      {questionList}
      <h1>{count}</h1>
      <button onClick={handleClick}>Click me</button>
      <input type="text" name="test" style={{ fontSize: "2em" }} value={formData} onChange={handleChange} />
      <p>{formData}</p>
    </div>
  );
}

export default App;

