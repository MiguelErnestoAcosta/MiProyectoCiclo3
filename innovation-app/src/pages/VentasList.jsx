import trash from 'media/trash.png'
import edit from 'media/edit.png'


const VentasList = () => {
    return ( 
        <div>
            <table className="table"> 
                <tr >
                    <th>Documento Cliente</th>
                    <th>Nombre Cliente</th>
                    <th>Vendedor</th>
                    <th>identificador 1</th>
                    <th>Nombre de Producto</th>
                    <th>Cantidad</th>
                    <th>Precion unitario</th>
                    <th>Valor Venta</th>
                    <th>Fecha Venta</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </tr>
                <tr>
                    <td>
                        1121
                    </td>
                    <td>
                        Miguel
                    </td>
                    <td>
                        Laura
                    </td>
                    <td>
                        111
                    </td>
                    <td>
                        Computador
                    </td>
                    <td>
                        2
                    </td>
                    <td>
                        5.000.000
                    </td>
                    <td>
                        10.000.000
                    </td>
                    <td>
                        03/10/2021
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
                        2121
                    </td>
                    <td>
                        fabian
                    </td>
                    <td>
                        Laura
                    </td>
                    <td>
                        111
                    </td>
                    <td>
                        tablet
                    </td>
                    <td>
                        1
                    </td>
                    <td>
                        1.000.000
                    </td>
                    <td>
                        1.000.000
                    </td>
                    <td>
                        30/09/2021
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
 
export default VentasList;