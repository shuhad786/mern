import React, {useState, useEffect} from "react";
import './App.css';
import Axios from 'axios';
import Main from "./Main";
import Quiz from "./Quiz";
import ScoreBoard from "./ScoreBoard";
import QuizContext from "./Context"




function App() {

  const [gameState, setGameState] = useState("login")
  const [finalScore, setFinalScore] = useState(0)
  const [name, setName] = useState('');
  const [getList, setList] = useState([]);
  
 

   useEffect(() => {
     Axios.get("http://localhost:3001/read").then((response) => {
      setList(response.data);
     });
   }, 
   []);
  
 
  return (
    <div className = "App">
      
      <h1>Get it Wrong!</h1>
      
      <QuizContext.Provider value = {{gameState, setGameState, finalScore, setFinalScore, name, setName}}>
      
      {gameState === "login" && <Main />}
      
      {gameState === "quiz" && <Quiz />}
      
      {gameState === "score" && <ScoreBoard />}
      
      </QuizContext.Provider>

      <div className="list">
      {getList.map((val) => {
        return(
          <div className="board">
          <h3>Player: {val.name}</h3>
          <h3>Score: {val.score}</h3>
          </div>
        );
      })}
      </div>
     
    </div>
  );
}

export default App;
