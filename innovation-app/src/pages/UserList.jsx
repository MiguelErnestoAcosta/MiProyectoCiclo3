import trash from 'media/trash.png'
import edit from 'media/edit.png'


const ProductList = () => {
    return ( 
        <div>
            <table className="table"> 
                <tr >
                    <th>Identificación</th>
                    <th>Nombre</th>
                    <th>Rol</th>
                    <th>Estado</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </tr>
                <tr>
                    <td>
                        10411
                    </td>
                    <td>
                        Laura
                    </td>
                    <td>
                        admin
                    </td>
                    <td>
                        Autorizado
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
                        2212
                    </td>
                    <td>
                        Miguel
                    </td>
                    <td>
                        Admin
                    </td>
                    <td>
                        Autorizado
                    </td>
                    <td>
                        <img src={edit} alt='editar' className='iconos' />  
                    </td>
                    <td>
                        <img src={trash} alt='eliminar' className='iconos' />  
                    </td>
                </tr>

                 </tr>

                <tr>
                    <td>
                        2214
                    </td>
                    <td>
                        felipe
                    </td>
                    <td>
                        Admin
                    </td>
                    <td>
                        Autorizado
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