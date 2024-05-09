package gm.Inventarios.controlador;

import gm.Inventarios.exepcion.RecursoNoEncontradoExepcion;
import gm.Inventarios.modelos.Producto;
import gm.Inventarios.servicio.ProductoServicio;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//localhost:8080/api/v1/inventario-app
@RequestMapping("/api/v1/inventario-app")
// @CrossOrigin(value = "http://localhost:4200") //solo se permite el acceso a la aplicación Angular
@CrossOrigin(origins = "*") //se permite el acceso a cualquier aplicación
public class ProductoControlador {
    // Logger para la clase ProductoControlador para mostrar en consola
    private static final Logger logger = LoggerFactory.getLogger(ProductoControlador.class);

    @Autowired
    private ProductoServicio productoServicio;

    //localhost:8080/api/v1/inventario-app/productos
    @GetMapping("/productos")
    public List<Producto> obtenerProductos(){
        List<Producto> productos = productoServicio.listarProductos();
        logger.info("Obteniendo productos");
        productos.forEach(producto -> logger.info(producto.toString()));
        return productos;
    }

    @PostMapping("/productos")
    public Producto agregarProducto(@RequestBody Producto producto){
        logger.info("Agregando producto: " + producto);
        return this.productoServicio.guardarProducto(producto);

    }

    @GetMapping("/productos/{id}")
    public ResponseEntity<Producto> obtenerProductoPorId(@PathVariable int id){
        logger.info("Obteniendo producto con id: " + id);
        Producto producto = this.productoServicio.buscarProductoPorId(id);
        logger.info("Producto encontrado: " + producto);
        if (producto == null) throw new RecursoNoEncontradoExepcion("Producto no encontrado con id: " + id);
        return ResponseEntity.ok(producto);
    }

    @PutMapping("/productos/{id}")
    public ResponseEntity<Producto> actualizarProducto(@PathVariable int id, @RequestBody Producto productoRecibido){
        Producto producto = this.productoServicio.buscarProductoPorId(id);
        if (producto == null) throw new RecursoNoEncontradoExepcion("Producto no encontrado con id: " + id);
        producto.setNombre(productoRecibido.getNombre());
        producto.setDescripcion(productoRecibido.getDescripcion());
        producto.setCantidad(productoRecibido.getCantidad());
        producto.setPrecio(productoRecibido.getPrecio());
        Producto productoActualizado = this.productoServicio.guardarProducto(producto);
        return ResponseEntity.ok(productoActualizado);
    }

    @DeleteMapping("/productos/{id}")
    public ResponseEntity<Void> eliminarProducto(@PathVariable int id){
        logger.info("Eliminando producto con id: " + id);
        Producto producto = this.productoServicio.buscarProductoPorId(id);
        logger.info("Producto encontrado: " + producto);
        if (producto == null) throw new RecursoNoEncontradoExepcion("Producto no encontrado con id: " + id);
        this.productoServicio.eliminarProductoPorId(id);
        return ResponseEntity.noContent().build();
    }

}
