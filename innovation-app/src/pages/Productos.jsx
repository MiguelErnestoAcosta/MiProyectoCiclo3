const Productos = () => {
    return ( 
        <form action="" name="newProduct" method="get" className="formularios_style">
            <label for="codigo">Código</label>
            <input type="text" name="codigo" id="id_codigo" placeholder="Código Producto" />
            <br/>
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" id="id_nombre" placeholder="Nombre" />
            <br/>
            <label for="valor">Valor </label>
            <input type="text" name="valor" id="id_valor" placeholder="Valor Unitario" />
            <br/>
            <label for="estado">Estado</label>
            <input type="text" name="estado" id="id_estado" placeholder="Estado" />
            <br/>
            <label for="descripcion">Descripción</label>
            <input type="text" name="descripcion" id="id_descripcion" placeholder="Descripción" maxLength="60"/>
            <br/>
            <input type="submit" name="enviar" value="Crear Producto"/>         
        </form>
     );
}
 
export default Productos;