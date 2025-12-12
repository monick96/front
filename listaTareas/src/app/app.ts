import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TareaForm } from './tarea-form/tarea-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Lista de Tareas');

  get titleApp(){
    return this.title;
  }
}
