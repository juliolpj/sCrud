import { Component, OnInit } from '@angular/core';
import { Observable  } from 'rxjs';

import { Empleado } from 'src/app/models/empleado';
import { DataService } from 'src/app/services/data.service';
import { filter, tap, map, flatMap } from 'rxjs/operators';
import { MensajesService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styles: []
})
export class EmpleadosComponent implements OnInit {
  frmStatus = 'Consultar';
  registro: Empleado = {};
  empleados: Array<Empleado>;

  constructor(public dataService: DataService, private mensajeService: MensajesService) {
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.dataService.getRecords$().subscribe(
      (data: Empleado[]) => {
        this.empleados = data;
        this.registro = {};
      }
    );
  }

  agregar() {
    this.registro = {};
    this.mensajeService.emitChange('');
    this.frmStatus = 'Agregar';
  }

  modificar(empleado: Empleado) {
    this.registro = Object.assign({}, empleado);
    this.mensajeService.emitChange('');
    this.frmStatus = 'Modificar'; 
  }
  
  eliminar(empleado: Empleado) {
    this.registro = Object.assign({}, empleado);
    this.mensajeService.emitChange('');
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
        this.mensajeService.emitChange('Registro agregado satisfactoriamente');
        this.fetchData();
      },
      error => {
        this.mensajeService.emitChange('** Error al agregar los datos: ' + error.statusText + ' **');
        console.log(error);
      },
      () => this.frmStatus = 'Consultar'
    )
  }

  aceptarModificarRegistro(empleado: Empleado) {
    this.dataService.updateRecord$(empleado).subscribe(
      data => {
        this.mensajeService.emitChange('Registro actualizado satisfactoriamente');
        this.fetchData();
      },
      error => this.mensajeService.emitChange('** Error al actualizar los registro: ' + error.statusText + ' **'),
      () => this.frmStatus = 'Consultar'
    )
  }

  aceptarEliminarRegistro(empleado: Empleado) {
    this.dataService.deleteRecord$(empleado).subscribe(
      () => {
        this.mensajeService.emitChange('Registro eliminado satisfactoriamente');
        this.fetchData()
      },
      error => this.mensajeService.emitChange('** Error al eliminar el registro: ' + error.statusText + ' **'),
      () => this.frmStatus = 'Consultar'
    )
  }

}
