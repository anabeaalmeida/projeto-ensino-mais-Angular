import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaCursoComponent } from './lista-curso/lista-curso.component';
import { ListaProfessoresComponent } from './lista-professores/lista-professores.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCursoComponent,
    ListaProfessoresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
