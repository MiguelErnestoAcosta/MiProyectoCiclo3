const Users = () => {
    return ( 
        <form action="" name="newProduct" method="get" className="formularios_style">

            
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" id="id_nombre" placeholder="Nombre" />
            <br/>
            <label for="identificacion">Id</label>
            <input type="text" name="identificacion" id="id_identificacion" placeholder="Identificación " />
            <br/>
            <label for="rol">Rol</label>
            <input type="text" name="rol" id="id_rol" placeholder="Rol " />
            <br/>
            <label for="estado">Estado</label>
            <input type="text" name="estado" id="id_estado" placeholder="Estado" />
            <br/>
            <input type="submit" name="enviar" value="Crear Usuario"/>         
        </form>
     );
}
 
export default Users;