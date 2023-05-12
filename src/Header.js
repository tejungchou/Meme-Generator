import './App.sass';
import trollface from './Troll-Face.png';

export default function Header() {
  return (
    <header className='header'> 
      <img src={trollface} className='header-image'/>
      <h2 className='header-title'>Meme generator</h2>
    </header>
  );
}


