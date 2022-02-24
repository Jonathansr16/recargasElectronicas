import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';



@NgModule({
  declarations: [
    InicioComponent,
    ProductosComponent,
    ReportesComponent,
    ContactoComponent,
    InscripcionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InicioComponent,
    ProductosComponent,
    ReportesComponent,
    ContactoComponent,
    InscripcionComponent
  ]
})
export class PagesModule { }
