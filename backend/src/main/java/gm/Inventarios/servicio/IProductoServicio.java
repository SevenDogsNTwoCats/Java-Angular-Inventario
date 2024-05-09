package gm.Inventarios.servicio;

import gm.Inventarios.modelos.Producto;

import java.util.List;

public interface IProductoServicio {
    public List<Producto> listarProductos();
    public Producto buscarProductoPorId(int id);
    public Producto guardarProducto(Producto producto);
    public void eliminarProductoPorId(int id);
}
