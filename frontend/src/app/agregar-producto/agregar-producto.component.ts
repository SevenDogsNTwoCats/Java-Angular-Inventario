import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-producto',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './agregar-producto.component.html',
})
export class AgregarProductoComponent {
  producto:Producto = new Producto();
  constructor(private productoServicio: ProductoService, private enrutador: Router) {}

  onSubmit() {
    this.guardarProducto();
  }

  guardarProducto() {
    this.productoServicio.agregarProducto(this.producto).subscribe({
      next: datos => {
        this.irListaProductos();
      },
      error: (error:any) => console.log(error)
    })
  }

  irListaProductos() {
    this.enrutador.navigate(['/productos']);
  }

}
