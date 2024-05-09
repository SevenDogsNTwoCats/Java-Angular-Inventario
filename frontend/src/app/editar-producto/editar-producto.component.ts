import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-producto',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule,],
  templateUrl: './editar-producto.component.html',
})
export class EditarProductoComponent {
  producto: Producto= new Producto();
  id: number;

  constructor(private productoServicio: ProductoService, private ruta: ActivatedRoute, private enrutador: Router) {}

  ngOnInit() {
    this.id = this.ruta.snapshot.params['id'];
    this.productoServicio.obtenerProductoPorId(this.id).subscribe({
      next: datos => this.producto = datos,
      error: (error:any) => console.log(error)
    });
  }

  onSubmit() {
    this.guardarProducto();
  }

  guardarProducto() {
    this.productoServicio.editarProducto(this.id, this.producto).subscribe({
      next: datos => this.irListaProductos(),
      error: (error:any) => console.log(error)
    })
  }

  irListaProductos() {
    this.enrutador.navigate(['/productos']);
  }
}
