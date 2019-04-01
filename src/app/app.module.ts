import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ReadmeComponent } from './components/readme/readme.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';

import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ReadmeComponent,
    NotFoundComponent,
    EmpleadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  providers: [
    HttpClient, DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
