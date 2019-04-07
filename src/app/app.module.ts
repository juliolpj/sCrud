import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ReadmeComponent } from './components/readme/readme.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';

import { FormularioComponent } from './components/empleados/formulario/formulario.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ReadmeComponent,
    NotFoundComponent,
    EmpleadosComponent,
    FormularioComponent,
    MensajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  providers: [
    //HttpClient, DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
