import './style.css'
import React from 'react'

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

export default function Letras({keyboardState, wordState, setWordState, errorState, setErrorState, wordSplit}){
    const selectedLetters = [];

    function clickLetter(letter, wordState, wordSplit){
        const newWord = [...wordState];
        let newError = 0;
        let match = false;
        
        wordSplit.forEach((l, index) => {
            if (letter === l){
                newWord[index] = l;
                match = true;
            }
        })
        if(!match){
            newError = errorState+1;
            setErrorState(newError);
        }
        setWordState(newWord);

        selectedLetters.push(letter);
    }

    return (
        <div className='letters'>
            <div className='keyboard'>
                {alfabeto.map(letter => <button disabled={keyboardState} onClick={() => clickLetter(letter, wordState, wordSplit)}>{letter.toUpperCase()}</button>)}
            </div>
        </div>   
    )
}