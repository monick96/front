import { Injectable } from '@angular/core';
import { randomInt, randomUUID } from 'crypto';

@Injectable({
  providedIn: 'root',
})
export class Task {

  private tareas:Tarea[] = [
    {
      id:1,
      descripcion: "Estudiar Angular",
      completado:false
    }
  ];

  getTareas(){
    return this.tareas;
  }

  addTarea(descripcionTarea:string){

    let idTarea = randomInt(500);

    let nuevaTarea:Tarea ={
      id:idTarea,
      descripcion:descripcionTarea,
      completado:false
    }
    
    this.guardarTarea(nuevaTarea)
    
  }

  marcarTareaHecha(id:number){

    let tarea = this.tareas.find(tarea=>tarea.id == id)
    tarea!.completado = true;

    this.guardarTarea(tarea!)
  }

  guardarTarea(tarea:Tarea){
    this.tareas.push(tarea)
  }


  
}
