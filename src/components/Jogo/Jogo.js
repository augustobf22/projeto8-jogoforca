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
  


export default function Jogo({words, errorState, setErrorState, wordState, setWordState, setKeyboardState}) {
    function chooseWord(words) {
        const wordSorted = words.sort(comparer)[0];
        const wordSplit = wordSorted.split('');
        const wordReplaced = [];
        wordSplit.forEach((letter, index) => wordReplaced[index] = "_ ");
        
        setKeyboardState(false);
        setWordState(wordReplaced);
        setErrorState(0);
    }

    return (
        <span className='game'>
            <img src={forca0} alt='forcaImg' />
            <div className="container-right">
                <button onClick={() => chooseWord(words)}>Escolher palavra</button>
                <h1>{wordState}</h1>
            </div>
        </span>
    )
}