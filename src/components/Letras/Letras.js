import './style.css'
import React from 'react'

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



export default function Letras({ keyboardState, setKeyboardState, wordState, setWordState, errorState, setErrorState, wordSplit, count, setCount, selectedLetters, setSelectedLetters, setColorState}) {
    function clickLetter(letter, wordState, wordSplit) {
        let auxCount = count;
        let newError = 0;

        const newWord = [...wordState];
        
        let match = false;
        let newSelected = [...selectedLetters];

        wordSplit.forEach((l, index) => {
            if (letter === l) {
                newWord[index] = l;
                match = true;
                auxCount++;
            }
        })
        if (!match) {
            newError = errorState + 1;
            setErrorState(newError);
        }
        setWordState(newWord);
        setCount(auxCount);


        newSelected.push(letter);
        setSelectedLetters(newSelected);

        if (newError > 5) {
            gameLost();
        }

        if (auxCount === wordSplit.length) {
            gameWon();
        }
    }

    function gameWon() {
        setKeyboardState(true);
        setColorState('green');
    }

    function gameLost() {
        setKeyboardState(true);
        setWordState(wordSplit);
        setColorState('red');
    }

    return (
        <div className='letters'>
            <div className='keyboard'>
                {alfabeto.map((letter, index) => {
                    if(selectedLetters.includes(letter)){
                        return <button disabled={true} key={index} data-test="letter" >{letter.toUpperCase()}</button>
                    } else {
                        return <button disabled={keyboardState} key={index} onClick={() => clickLetter(letter, wordState, wordSplit)} data-test="letter">{letter.toUpperCase()}</button>
                    }
                }
                )}
            </div>
        </div>   
    )
}