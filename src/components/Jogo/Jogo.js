import React from 'react'
import './style.css'
import forca0 from './assets/forca0.png'
import forca1 from './assets/forca1.png'
import forca2 from './assets/forca2.png'
import forca3 from './assets/forca3.png'
import forca4 from './assets/forca4.png'
import forca5 from './assets/forca5.png'
import forca6 from './assets/forca6.png'

//randomize words and pass as parameter
function comparer() { 
    return Math.random() - 0.5; 
}

export default function Jogo({words, errorState, setErrorState, wordState, setWordState, setKeyboardState, wordSplit, setWordSplit, count, setCount, setSelectedLetters, colorState, setColorState}) {
    let imgRef = '';
    switch(errorState){    
        case 0: imgRef = forca0; break;
        case 1: imgRef = forca1; break;
        case 2: imgRef = forca2; break;
        case 3: imgRef = forca3; break;
        case 4: imgRef = forca4; break;
        case 5: imgRef = forca5; break; 
        default: imgRef = forca6;
    }

    function chooseWord(words) {
        const wordSorted = words.sort(comparer)[0];
        const wSplit = wordSorted.split('');
        const wordReplaced = [];
        wSplit.forEach((letter, index) => wordReplaced[index] = " _");
        
        setKeyboardState(false);
        setWordSplit(wSplit);
        setWordState(wordReplaced);
        setErrorState(0);
        setCount(0);
        setSelectedLetters([]);
        setColorState('black');
    }

    return (
        <span className='game'>
            <img src={imgRef} alt='forcaImg' data-test="game-image" />
            <div className="container-right">
                <button onClick={() => chooseWord(words)} data-test="choose-word">Escolher palavra</button>
                <h1 className={colorState} data-test="word" >{wordState}</h1>
            </div>
        </span>
    )
}