import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Productos {
  private _urlApiProductos = 'https://dummyjson.com/products';
  private _http = inject(HttpClient);

  arrayProductos = [
    {
      nombre:"Laptop",
      precio:2000,
      stock:5
    },
    {
      nombre:"Mouse",
      precio:20,
      stock:0
    },
    {
      nombre:"teclado",
      precio:50,
      stock:10
    }
  ]

  getProductosFromApi(){
    return this._http.get<any>(this._urlApiProductos);
  }

  
}
