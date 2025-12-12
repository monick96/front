import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class Task {

  private tareas:Tarea[] = [
    {
      id:1,
      descripcion: "Estudiar Angular",
      completado:false
    },
    {
      id:2,
      descripcion: "Practicar Angular",
      completado:true
    }
  ];

  getTareas(){
    return this.tareas;
  }

  generarId(): number {
    return Math.floor(Math.random() * 100000); 
  }

  addTarea(descripcionTarea:string){

    let idTarea = this.generarId();

    let nuevaTarea:Tarea ={
      id:idTarea,
      descripcion:descripcionTarea,
      completado:false
    }
    
    this.guardarTarea(nuevaTarea)
    
  }

  cambiarEstadoTarea(id:number){

    let tarea = this.getTareaById(id);
    
    tarea!.completado = !tarea!.completado;

    console.log("cambio estado tarea: " , tarea);
  }

  getTareaById(id:number){
    return this.tareas.find(tarea=>tarea.id == id);
  }

  guardarTarea(tarea:Tarea){
    this.tareas.push(tarea)
  }


  
}
