import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Productos {
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
  
}
