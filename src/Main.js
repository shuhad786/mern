import React, {useContext} from 'react'
import './App.css';
import QuizContext from "./Context";


export default function Main() {
  const {setGameState} = useContext(QuizContext);
  return (
    <div className='login'>
      
      <button onClick={() => {
        setGameState("quiz");
        
      }}>
      Start Game 
      </button>

    </div>
  )
}

