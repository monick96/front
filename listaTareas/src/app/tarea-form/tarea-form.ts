import { Component, inject } from '@angular/core';
import { Task } from '../services/task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarea-form',
  imports: [FormsModule],
  templateUrl: './tarea-form.html',
  styleUrl: './tarea-form.css',
})
export class TareaForm {
  private taskService = inject(Task)
  private listaTareasArray:Tarea[] = []
  descripcion = "";

  crearTarea(){
    if(this.descripcion.length<1){
      console.log("no puede estar vacio");
      return
    }
    this.taskService.addTarea(this.descripcion);
    this.descripcion ="";
  }

  get listaTareas(){
    return this.listaTareasArray = this.taskService.getTareas();
  }

  cambiarEstadoTarea(id:number){
    this.taskService.cambiarEstadoTarea(id);
  }

}
