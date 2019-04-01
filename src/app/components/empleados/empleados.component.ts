import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styles: []
})
export class EmpleadosComponent implements OnInit {
  empleados: Observable<Array<Empleado>> = of(  [
    {
      nombre: 'Julio Pérez',
      cargo: 'Director',
      email: 'juliolpj@hotmail.com',
      id: '1'
    },
    {
      nombre: 'Gabriela Pérez',
      cargo: 'Directora de proyectos',
      email: 'gabrielaaperezr@gmail.com',
      id: '2'
    }
  ]);

  constructor() { }

  ngOnInit() {
    console.log(this.empleados);
    
  }

  agregar() {
    console.log('Pulsó el botón agregar');
    
  }

  eliminar(id: string) {
    console.log('Eliminar', id);
  }

  seleccionar(id: string) {
    console.log('Seleccionar', id);
  }
}
