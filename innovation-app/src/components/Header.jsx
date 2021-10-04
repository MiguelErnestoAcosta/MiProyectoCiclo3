import logo from 'media/logo.png'
import Pestañas from './Pestañas';
const Header = () => {
  return (
    <header>
      <ul className='navbar'>
      <li>
          <img src={logo} alt='imagen' className='logo' />
      </li>
      <h1>INNOVATION TECNOLOGY</h1>
      <li>
          <button className='botonGenerico secondaryButton'>Login</button>
        </li>
        <li>
          <button className='botonGenerico mainButton'>Registro</button>
      </li>
      
      <li>
          <img src={logo} alt='imagen' className='logo' />
      </li>

        
          
        
      </ul>
    </header>
  );
};

export default Header;

