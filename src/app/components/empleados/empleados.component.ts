import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styles: []
})
export class EmpleadosComponent implements OnInit {
  empleados = [
    {
      nombre: 'Julio Pérez',
      cargo: 'Director',
      email: 'juliolpj@hotmail.com'
    }
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.empleados);
    
  }

  agregar() {
    console.log('Pulsó el botón agregar');
    
  }

  eliminar(i: number) {
    console.log('Eliminar', i);
  }

  seleccionar(i: number) {
    console.log('Seleccionar', i);
  }
}
