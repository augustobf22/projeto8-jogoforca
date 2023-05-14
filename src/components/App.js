import Jogo from './Jogo/Jogo'
import Letras from './Letras/Letras'
import './reset.css';
import './style.css';
import palavras from '../palavras';
import React from 'react'



export default function App() {
  const [errorState, setErrorState] = React.useState(0);
  const [wordState, setWordState] = React.useState('');
  const [keyboardState, setKeyboardState] = React.useState(true);
  const [wordSplit, setWordSplit] = React.useState('');
  const [count, setCount] = React.useState(0);
  const [selectedLetters, setSelectedLetters] = React.useState([]);
  const [colorState, setColorState] = React.useState('black');

  return (
    <div className="container">
      <Jogo words={palavras} errorState={errorState} setErrorState ={setErrorState} wordState = {wordState} setWordState = {setWordState} setKeyboardState={setKeyboardState} wordSplit={wordSplit} setWordSplit={setWordSplit} count={count} setCount={setCount} setSelectedLetters={setSelectedLetters} colorState={colorState} setColorState={setColorState}/>
      <Letras keyboardState={keyboardState} setKeyboardState={setKeyboardState} wordState = {wordState} setWordState = {setWordState} errorState={errorState} setErrorState ={setErrorState} wordSplit={wordSplit} count={count} setCount={setCount} selectedLetters={selectedLetters} setSelectedLetters={setSelectedLetters} colorState={colorState} setColorState={setColorState}/>
    </div>
  );
}