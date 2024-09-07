import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private tareas: Tarea[] = [];
  private idTarea: number = 0;

  obtenerTareas(): Tarea[] {
    return this.tareas;
  }

  agregarTarea(nombre: string): void {
    const nuevaTarea: Tarea = {
      id: this.idTarea++,
      nombre,
      completada: false
    };
    this.tareas.push(nuevaTarea);
  }

  eliminarTarea(id: number): void {
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
  }

  completarTarea(id: number): void {
    const tarea = this.tareas.find(t => t.id === id);
    if (tarea) {
      tarea.completada = !tarea.completada;
    }
  }

  editarTarea(id: number, nombreEditado: string): void {
    const tarea = this.tareas.find(t => t.id === id);
    if (tarea) {
      tarea.nombre = nombreEditado;
    }
  }
}











