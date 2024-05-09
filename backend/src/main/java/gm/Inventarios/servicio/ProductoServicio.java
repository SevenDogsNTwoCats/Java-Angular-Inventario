package gm.Inventarios.servicio;

import gm.Inventarios.modelos.Producto;
import gm.Inventarios.repositorio.ProductoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductoServicio implements IProductoServicio{

    @Autowired
    private ProductoRepositorio productoRepositorio;

    @Override
    public List<Producto> listarProductos() {
        return this.productoRepositorio.findAll();
    }

    @Override
    public Producto buscarProductoPorId(int id) {
        return this.productoRepositorio.findById(id).orElse(null);
    }

    @Override
    public Producto guardarProducto(Producto producto) {
        return this.productoRepositorio.save(producto);
    }

    @Override
    public void eliminarProductoPorId(int id) {
        this.productoRepositorio.deleteById(id);
    }
}
