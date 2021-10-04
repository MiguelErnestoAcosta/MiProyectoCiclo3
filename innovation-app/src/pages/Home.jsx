import Pestañas from "components/Pestañas";



function Home(){
    return(

            <ul className='navbarPestañas'>
                <Pestañas nombre="VENTAS" ruta='/ventas'/>
                <Pestañas nombre="LISTAR VENTAS" ruta='/ventasList'/>
                <Pestañas nombre="PRODUCTOS" ruta='/productos'/>
                <Pestañas nombre="LISTAR PRODUCTOS" ruta='/productList'/>
                <Pestañas nombre="USUARIOS" ruta='/usuarios' />
                <Pestañas nombre="LISTAR USUARIOS" ruta='/usuariosList' />
            </ul>
            


        
    );
}
 
export default Home;
