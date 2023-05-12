import './style.css'

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

export default function Letras(){
    return (
        <div className='letters'>
            <div className='keyboard'>
                {alfabeto.map(letter => <button disabled>{letter.toUpperCase()}</button>)}
            </div>
        </div>   
    )
}