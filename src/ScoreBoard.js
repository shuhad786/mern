import React,{useContext} from "react";
import './App.css';
import QuizContext from "./Context";
import { Question } from './Questions';
import Axios from 'axios';

function ScoreBoard() {

  const {finalScore, setFinalScore, setGameState, name, setName} = useContext(QuizContext);

  const AddToList = (playerScore) => {
    Axios.post("http://localhost:3001/insert", {
    name: name,
    score: playerScore
  });
  };

  const restartQuiz = () => {
    AddToList(finalScore)
    setFinalScore(0);
    setGameState("login");
    setName('');
  };
  return (
    
    <div className='score'>

      <h1>Quiz Completed</h1>
      <input type="text" onChange= {(event) => {setName(event.target.value)}} />
      <h3>{finalScore} / {Question.length}</h3>
      <button onClick={restartQuiz} > Restart Quiz </button>
    </div>
  )
};

export default ScoreBoard