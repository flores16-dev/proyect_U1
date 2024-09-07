import { Component, Input } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { Tarea } from '../../models/tarea.model';

@Component({
  selector: 'app-tarea-item',
  templateUrl: './tarea-item.component.html',
  styleUrls: ['./tarea-item.component.css']
})
export class TareaItemComponent {
  @Input() tarea!: Tarea;

  modoEdicion: boolean = false;
  nombreEditado: string = '';

  constructor(private tareasService: TareasService) {}

  toggleCompletada(): void {
    this.tareasService.completarTarea(this.tarea.id);
  }

  eliminarTarea(): void {
    this.tareasService.eliminarTarea(this.tarea.id);
  }

  editarTarea(): void {
    this.modoEdicion = true;
    this.nombreEditado = this.tarea.nombre;
  }

  guardarTarea(): void {
    if (this.nombreEditado.trim()) {
      this.tareasService.editarTarea(this.tarea.id, this.nombreEditado);
      this.modoEdicion = false;
    }
  }

  cancelarEdicion(): void {
    this.modoEdicion = false;
  }
}








