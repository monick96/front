import { Component, inject } from '@angular/core';
import { Productos } from '../services/productos';

@Component({
  selector: 'app-tabla-producto',
  imports: [],
  templateUrl: './tabla-producto.html',
  styleUrl: './tabla-producto.css',
})
export class TablaProducto {
  private productoService = inject(Productos);
  
  get productos(){
    return this.productoService.arrayProductos;
  }
}
