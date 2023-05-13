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

  return (
    <div className="container">
      <Jogo words={palavras} errorState={errorState} setErrorState ={setErrorState} wordState = {wordState} setWordState = {setWordState} setKeyboardState={setKeyboardState}/>
      <Letras keyboardState={keyboardState} />
    </div>
  );
}

