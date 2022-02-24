import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { InscripcionComponent } from './pages/inscripcion/inscripcion.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ReportesComponent } from './pages/reportes/reportes.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'reportes', component: ReportesComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'inscripcion', component: InscripcionComponent },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
