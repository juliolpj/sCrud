import { Component, OnInit } from '@angular/core';
import { Observable  } from 'rxjs';

import { Empleado } from 'src/app/models/empleado';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styles: []
})
export class EmpleadosComponent implements OnInit {
  frmStatus = 'Consultar';
  registro: Empleado = {};
  empleados: Observable<Array<Empleado>>;

  constructor(public data: DataService) {
  }

  ngOnInit() {
    this.empleados = this.data.getRecords();
    
  }

  agregar() {
    this.frmStatus = 'Agregar';
  }

  eliminar(id: string) {
    console.log('Eliminar', id);
  }

  seleccionar(empleado: Empleado) {
    this.registro = {
      nombre: empleado.nombre, 
      cargo: empleado.cargo, 
      email: empleado.email 
    };
    /* this.registro = Object.assign({}, empleado);
    console.log(this.registro);*/
    this.frmStatus = 'Modificar'; 
  }

  recibirCancelar(mensaje: string) {
    this.frmStatus = mensaje;
  }

  recibirAceptar(objeto) {
    switch (this.frmStatus) {
      case 'Modificar':
          console.log('Modificar');
        break;
      case 'Agregar':
        console.log('Agregar');
      break;
    }
    this.frmStatus = 'Consultar';
    console.log('Recibir aceptar', objeto);
  }

  guardarModificaciones(objeto) {
    this.registro = objeto;

  }

}
