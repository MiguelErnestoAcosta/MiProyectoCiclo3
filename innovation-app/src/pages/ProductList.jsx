import trash from 'media/trash.png'
import edit from 'media/edit.png'


const ProductList = () => {
    return ( 
        <div>
            <table className="table"> 
                <tr >
                    <th>Código</th>
                    <th>Nombre</th>
                    <th>Valor</th>
                    <th>Estado</th>
                    <th>Descripcion</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </tr>
                <tr>
                    <td>
                        1
                    </td>
                    <td>
                        ASUS CORE I7
                    </td>
                    <td>
                        5.000.000
                    </td>
                    <td>
                        Disponible
                    </td>
                    <td>
                        COMPUTADOR CON 12 gigas de RAM, Disco SD 500 gigas
                    </td>
                    <td>
                        <img src={edit} alt='editar' className='iconos' />  
                    </td>
                    <td>
                        <img src={trash} alt='eliminar' className='iconos' />  
                    </td>
                    
                </tr>

                <tr>
                    <td>
                        2
                    </td>
                    <td>
                        TABLET SAMSUMG TAB3
                    </td>
                    <td>
                        1.000.000
                    </td>
                    <td>
                        Disponible
                    </td>
                    <td>
                        TABLET DE 7"
                    </td>
                    <td>
                        <img src={edit} alt='editar' className='iconos' />  
                    </td>
                    <td>
                        <img src={trash} alt='eliminar' className='iconos' />  
                    </td>
                </tr>

            </table>
        </div>
     );
}
 
export default ProductList;