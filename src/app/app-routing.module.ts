import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReadmeComponent } from './components/readme/readme.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'readme', component: ReadmeComponent },
  { path: 'empleados', component: EmpleadosComponent },
  { path: '**', component: NotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
