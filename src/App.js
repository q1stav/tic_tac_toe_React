import React from "react";
import { useState } from "react";
import GameFieldContainer from './components/GameFieldContainer' 
import { calculateWinner, calculateDraw } from "./components/InformationContainer";
import InformationContainer from "./components/InformationContainer";
import styles from "./styles/App.css";

const App = () => { 
  const [field, setField] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  let winner=calculateWinner(field); // использую переменную вместо  const [isGameEnded, setIsGameEnded] = useState(false);
  let draw=calculateDraw(field); //  использую переменную вместо const [isDraw, setIsDraw] = useState(false);

  const handleClick=(index)=>{
    const fieldCopy=[...field];
    if(winner || fieldCopy[index]) return;
    if(!draw) return;
    fieldCopy[index]=xIsNext ? 'X' : 'O';
    setField(fieldCopy);
    setXIsNext(!xIsNext);
  }

  const startNewGame=()=>{
    return (
      <button className="startButton" onClick={()=>{
        setXIsNext(true);
        setField(Array(9).fill(null))}}>Новая игра</button>
    )
  }

  return (
    <div className="App">
      <InformationContainer turn={xIsNext} winner={winner} draw={draw}/>
      <GameFieldContainer field={field} click={handleClick} />
      {startNewGame()}
    </div>
  );
};

export default App;
