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
    this.frmStatus = 'Agregar';
  }

  eliminar(empleado: Empleado) {
    this.registro = Object.assign({}, empleado);
    this.frmStatus = 'Eliminar';
  }

  seleccionar(empleado: Empleado) {
    this.registro = Object.assign({}, empleado);
    this.frmStatus = 'Modificar'; 
  }

  recibirCancelar(mensaje: string) {
    this.frmStatus = mensaje;
  }

  recibirAceptar(empleado: Empleado) {
    switch (this.frmStatus) {
      case 'Agregar':
        console.log('Agregar');
      case 'Modificar':
          console.log('Modificar');
        break;
      case 'Eliminar':
        this.aceptarEliminarRegistro(empleado);
      break;
    }
    this.frmStatus = 'Consultar';
    console.log('Recibir aceptar', empleado);
  }

  guardarModificaciones(objeto) {
    this.registro = objeto;

  }

  aceptarEliminarRegistro(empleado: Empleado) {
    this.dataService.deleteRecord(empleado).subscribe(
      () => this.fetchData(),
      error => alert('** Error al eliminar los datos: ' + error.statusText + ' **')
    )
  }

}
