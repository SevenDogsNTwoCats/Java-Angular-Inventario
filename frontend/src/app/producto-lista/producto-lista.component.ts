import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-lista.component.html',
})
export class ProductoListaComponent {

  productos: Producto[];

  constructor(private productoServicio: ProductoService, private enrutador: Router) { }

  ngOnInit() {
    this.obtenerProductos();
  }

  private obtenerProductos() {
    //consumir los datos del observable (suscribirnos)
    this.productoServicio.obtenerProductosLista().subscribe({
      next: datos => this.productos = datos
      ,
      error: (error: any) => console.error('Hubo un error al obtener los productos', error)

    });
  }



  editarProducto(id: number) {
    this.enrutador.navigate(['editar-producto', id]);
  }

  borrarProducto(id: number) {
    this.productoServicio.eliminarProducto(id).subscribe({
      next: () => this.obtenerProductos(),
      error: (error: any) => console.error('Hubo un error al eliminar el producto', error)
    });
  }

}
