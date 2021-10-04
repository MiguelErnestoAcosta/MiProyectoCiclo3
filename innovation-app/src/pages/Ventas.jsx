const Ventas = () => {
    return ( 
        <form action="" name="newProduct" method="get" className="formularios_style">

           <label for="codigo"> Documento Cliente</label>
            <input type="text" name="documento" id="id_documento" placeholder="Documento Cliente" />
            <br/>
            <label for="codigo">Nombre Cliente</label>
            <input type="text" name="cliente" id="id_cliente" placeholder="Nombre Cliente" />
            <br/>
            <label for="codigo">Vendedor </label>
            <input type="text" name="vendedor" id="id_vendedor" placeholder="Vendedor" />
            <br/>
            <label for="codigo">Identificador 1</label>
            <input type="text" name="identificador" id="id_identificador" placeholder="Identificador 1" />
            <br/>
            <label for="nombre">Nombre Producto</label>
            <input type="text" name="nombre_producto" id="id_nombre_producto" placeholder="Nombre Producto" />
            <br/>
            <label for="valor">Cantidad </label>
            <input type="text" name="cantidad" id="id_cantidad" placeholder="Cantidad" />
            <br/>
            <label for="estado">Precio</label>
            <input type="text" name="precio" id="id_precio" placeholder="Precio" />
            <br/>
            <label for="descripcion">Valor venta</label>
            <input type="text" name="valor_venta" id="id_valor_venta" placeholder="Valor venta" />
            <br/>
            <label for="codigo">Fecha Venta </label>
            <input type="text" name="fecha" id="id_fecha" placeholder="Fecha Venta" />
            <br/>
            <input type="submit" name="enviar" value="Crear Venta"/>         
        </form>
     );
}
 
export default Ventas;