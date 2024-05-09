import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductoListaComponent } from './producto-lista/producto-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { FormsModule } from '@angular/forms';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    RouterLink,
    HttpClientModule,
    FormsModule,
    ProductoListaComponent,
    AgregarProductoComponent,
    EditarProductoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
