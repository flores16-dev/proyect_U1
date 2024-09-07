import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';
import { TareaItemComponent } from './components/tarea-item/tarea-item.component';
import { TareaFormComponent } from './components/tarea-form/tarea-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaTareasComponent,
    TareaItemComponent,
    TareaFormComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

