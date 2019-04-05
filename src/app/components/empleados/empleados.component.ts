import { Component, OnInit } from '@angular/core';
import { Observable  } from 'rxjs';

import { Empleado } from 'src/app/models/empleado';
import { DataService } from 'src/app/services/data.service';
import { filter, tap, map, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styles: []
})
export class EmpleadosComponent implements OnInit {
  frmStatus = 'Consultar';
  registro: Empleado = {};
  empleados: Array<Empleado>;

  constructor(public dataService: DataService) {
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.dataService.getRecords$().subscribe(
      (data: Empleado[]) => this.empleados = data
    );
  }

  agregar() {
    this.registro = {};
    this.frmStatus = 'Agregar';
  }

  modificar(empleado: Empleado) {
    this.registro = Object.assign({}, empleado);
    this.frmStatus = 'Modificar'; 
  }
  
  eliminar(empleado: Empleado) {
    this.registro = Object.assign({}, empleado);
    this.frmStatus = 'Eliminar';
  }

  recibirCancelar(mensaje: string) {
    this.frmStatus = mensaje;
  }

  recibirAceptar(empleado: Empleado) {
    switch (this.frmStatus) {
      case 'Agregar':
        this.aceptarAgregarRegistro(empleado);
        break;
      case 'Modificar':
        this.aceptarModificarRegistro(empleado);
        break;
      case 'Eliminar':
        this.aceptarEliminarRegistro(empleado);
      break;
    }
  }

  aceptarAgregarRegistro(empleado: Empleado) {
    this.dataService.addRecord$(empleado).subscribe(
      data => {
        console.log(data);
        this.fetchData();
      },
      error => {
        alert('** Error al agregar los datos: ' + error.statusText + ' **');
        console.log(error);
      },
      () => this.frmStatus = 'Consultar'
    )
  }

  aceptarModificarRegistro(empleado: Empleado) {
    this.dataService.updateRecord$(empleado).subscribe(
      data => {
        console.log(data);
        this.fetchData();
      },
      error => alert('** Error al modificar los datos: ' + error.statusText + ' **'),
      () => this.frmStatus = 'Consultar'
    )
  }

  aceptarEliminarRegistro(empleado: Empleado) {
    this.dataService.deleteRecord$(empleado).subscribe(
      () => this.fetchData(),
      error => alert('** Error al eliminar los datos: ' + error.statusText + ' **'),
      () => this.frmStatus = 'Consultar'
    )
  }

}
