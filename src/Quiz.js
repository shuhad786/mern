import React, {useState, useContext} from 'react'
import { Question } from './Questions';
import QuizContext from "./Context"
import './App.css';

function Quiz() {

  const {finalScore, setFinalScore, setGameState} = useContext(QuizContext);
  const [currQuestion, setCurrQuestion] = useState(0)
  const [option, setOption] = useState("")

  const nextQuestion = () => {
    if (Question[currQuestion].answer === option){
      setFinalScore(finalScore + 1)
    }
      setCurrQuestion(currQuestion + 1)
  } 
  
  const finish = () =>{
    if (Question[currQuestion].answer === option){
      setFinalScore(finalScore + 1)
    }
      setGameState("score")
  }
  
  return (
    <div className='quiz'>
      <h1>{Question[currQuestion].prompt}</h1>
      <div className='option'>
        <button onClick={() => setOption("A")}> {Question[currQuestion].A}</button>
        <button onClick={() => setOption("B")}> {Question[currQuestion].B}</button>
        <button onClick={() => setOption("C")}> {Question[currQuestion].C}</button>
      </div>
      {currQuestion === Question.length - 1 ? (
        <button onClick={finish}>Finish</button>
      ) : <button onClick={nextQuestion}>Next Question</button>
      }
      
    </div>
  )
}

export default Quiz