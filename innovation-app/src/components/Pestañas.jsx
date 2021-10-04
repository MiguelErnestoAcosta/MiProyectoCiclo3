import { Link } from 'react-router-dom';

function Pestañas({ nombre, ruta }) {
  return (
    <li >
      <Link to={ruta}>
        <button className='botonGenerico optionButton'>{nombre}</button>
      </Link>
     
    </li>
  );

}

export default Pestañas;