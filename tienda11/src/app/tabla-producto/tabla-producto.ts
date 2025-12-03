import { Component, inject } from '@angular/core';
import { Productos } from '../services/productos';
import { error, log } from 'console';

@Component({
  selector: 'app-tabla-producto',
  imports: [],
  templateUrl: './tabla-producto.html',
  styleUrl: './tabla-producto.css',
})
export class TablaProducto {
  private _productoService = inject(Productos);

  productosFromApi:any[] = []

  ngOnInit(){
   this.getProductosFromApi();
  }
  
  get productos(){
    return this._productoService.arrayProductos;
  }

  get totalPrecios(){
    let sumatoria = 0;

    this.productos.forEach(p => {
      sumatoria += p.precio;
    })

    return sumatoria;
  }

  get totalPreciosApi(){
    let sumatoria = 0;

    this.productosFromApi.forEach(p => {
      sumatoria += p.price;
    })

    return sumatoria;
  }

  getProductosFromApi(){
    return this._productoService.getProductosFromApi().subscribe({
      next: (res:any) =>{
        this.productosFromApi = res.products;
      },
      error:(error:string)=>{
        console.log("error desde tabla producto.ts: ", error);
      }
    })
  }
}
