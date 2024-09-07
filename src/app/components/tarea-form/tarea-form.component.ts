import { Component } from '@angular/core';
import { TareasService } from '../../services/tareas.service';

@Component({
  selector: 'app-tarea-form',
  templateUrl: './tarea-form.component.html',
  styleUrls: ['./tarea-form.component.css'],
})
export class TareaFormComponent {
  nuevaTarea: string = '';

  constructor(private tareasService: TareasService) {}

  agregarTarea() {
    if (this.nuevaTarea.trim()) {
      this.tareasService.agregarTarea(this.nuevaTarea);
      this.nuevaTarea = ''; // Limpiar el input
    }
  }
}

