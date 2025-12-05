import { Component, inject } from '@angular/core';
import { Productos } from '../services/productos';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabla-productos-driven',
  imports: [FormsModule],
  templateUrl: './tabla-productos-driven.html',
  styleUrl: './tabla-productos-driven.css',
})
export class TablaProductosDriven {
  private _productService = inject(Productos);

  productosFromApi:any[] = [];

  productoEnEdicion ={
    id:0,
    title:"",
    price:0,
    stock:0
  }

  ngOnInit(){
   this.getProductosFromApi();
  }

  getProductosFromApi(){
    return this._productService.getProductosFromApi().subscribe({
      next: (res:any) =>{
        this.productosFromApi = res.products;
      },
      error:(error:string)=>{
        console.log("error desde tabla producto.ts: ", error);
      }
    })
  }

  get totalPreciosApi(){
    let sumatoria = 0;

    this.productosFromApi.forEach(p => {
      sumatoria += p.price;
    })

    return sumatoria;
  }

  editarProducto(producto:any){
    this.productoEnEdicion.id = producto.id;
    this.productoEnEdicion.title = producto.title;
    this.productoEnEdicion.price = producto.price;
    this.productoEnEdicion.stock = producto.stock;
  }

  guardarEdicion(){
    let producto = this.getProductoById(this.productoEnEdicion.id);
    
    producto.title = this.productoEnEdicion.title;
    producto.price= this.productoEnEdicion.price;
    producto.stock = this.productoEnEdicion.stock;

    //console.log("producto Editado: ", producto);
  }

  getProductoById(id:number){
    return this.productosFromApi.find(p=>p.id == id)
  }
  

}
