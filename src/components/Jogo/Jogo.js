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

export default function Jogo({words, errorState, setErrorState, wordState, setWordState, setKeyboardState, wordSplit, setWordSplit}) {
    let imgRef = '';
    switch(errorState){    
        case 0: imgRef = forca0; break;
        case 1: imgRef = forca1; break;
        case 2: imgRef = forca2; break;
        case 3: imgRef = forca3; break;
        case 4: imgRef = forca4; break;
        case 5: imgRef = forca5; break;
        case 6: imgRef = forca6;
    }

    function chooseWord(words) {
        const wordSorted = words.sort(comparer)[0];
        const wSplit = wordSorted.split('');
        const wordReplaced = [];
        wSplit.forEach((letter, index) => wordReplaced[index] = "_ ");
        
        setKeyboardState(false);
        setWordSplit(wSplit);
        setWordState(wordReplaced);
        setErrorState(0);
    }

    return (
        <span className='game'>
            <img src={imgRef} alt='forcaImg' />
            <div className="container-right">
                <button onClick={() => chooseWord(words)}>Escolher palavra</button>
                <h1>{wordState}</h1>
            </div>
        </span>
    )
}