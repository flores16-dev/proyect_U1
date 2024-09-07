import { Component } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { Tarea } from '../../models/tarea.model';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css'],
})
export class ListaTareasComponent {
  tareas: Tarea[] = [];

  constructor(private tareasService: TareasService) {
    this.tareas = this.tareasService.obtenerTareas();
  }
}











