import { Component, inject } from '@angular/core';
import { Productos } from '../services/productos';
import { error, log } from 'console';
import { ReactiveFormsModule,FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-tabla-producto',
  imports: [ReactiveFormsModule],
  templateUrl: './tabla-producto.html',
  styleUrl: './tabla-producto.css',
})
export class TablaProducto {
  private _productoService = inject(Productos);

  productosFromApi:any[] = []

  formEditarProducto = new FormGroup({
    id:new FormControl(1),
    title:new FormControl(""),
    price:new FormControl(0),
    stock:new FormControl(0)
  })

  ngOnInit(){
   this.getProductosFromApi();
  }

  editarProducto(producto:any){
    //console.log("producto: ", producto);
    this.formEditarProducto.patchValue({
      id:producto.id,
      title:producto.title,
      price:producto.price,
      stock:producto.stock
    })
  }

  guardarCambios(){
    
    let productoEditado = this.formEditarProducto.value;
    console.log("guardando : ", this.formEditarProducto.value);
    console.log("Guardado con exito!");

    //obtener y modificar producto en memoria
    let producto = this.getProductoById(productoEditado.id!);
    producto.title = productoEditado.title;
    producto.price = productoEditado.price;
    producto.stock = productoEditado.stock;

    //limpiar form
    this.formEditarProducto.reset();
    
  }

  getProductoById(id:number){
    return this.productosFromApi.find(p=>p.id == id)
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
