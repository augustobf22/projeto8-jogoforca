import Jogo from './Jogo/Jogo'
import Letras from './Letras/Letras'
import './reset.css';
import './style.css';
import palavras from '../palavras';
import React from 'react'



export default function App() {
  //states: errorState, wordState, keyboardState
  const [errorState, setErrorState] = React.useState(0);
  const [wordState, setWordState] = React.useState('');
  const [keyboardState, setKeyboardState] = React.useState(true);
  const [wordSplit, setWordSplit] = React.useState('');

  return (
    <div className="container">
      <Jogo words={palavras} errorState={errorState} setErrorState ={setErrorState} wordState = {wordState} setWordState = {setWordState} setKeyboardState={setKeyboardState} wordSplit={wordSplit} setWordSplit={setWordSplit}/>
      <Letras keyboardState={keyboardState} wordState = {wordState} setWordState = {setWordState} errorState={errorState} setErrorState ={setErrorState} wordSplit={wordSplit}/>
    </div>
  );
}