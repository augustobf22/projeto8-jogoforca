import Jogo from './Jogo/Jogo'
import Letras from './Letras/Letras'
import './reset.css';
import './style.css';
import palavras from '../palavras';

//randomize words and pass as parameter

export default function App() {
  return (
    <>
      <Jogo />
      <Letras />
    </>
  );
}

