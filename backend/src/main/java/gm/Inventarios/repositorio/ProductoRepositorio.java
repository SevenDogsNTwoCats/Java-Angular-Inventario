package gm.Inventarios.repositorio;

import gm.Inventarios.modelos.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductoRepositorio extends JpaRepository<Producto, Integer> {
}
