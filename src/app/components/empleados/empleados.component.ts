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

  constructor(public dataService: DataService, private msgService: MensajesService) {
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
    this.msgService.sendMessage('');
    this.frmStatus = 'Agregar';
  }

  modificar(empleado: Empleado) {
    this.registro = Object.assign({}, empleado);
    this.msgService.sendMessage('');
    this.frmStatus = 'Modificar'; 
  }
  
  eliminar(empleado: Empleado) {
    this.registro = Object.assign({}, empleado);
    this.msgService.sendMessage('');
    this.frmStatus = 'Eliminar';
  }

  recibirCancelar(mensaje: string) {
    this.registro = {};
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
        this.msgService.sendMessage('Registro agregado satisfactoriamente');
        this.fetchData();
      },
      error => {
        this.msgService.sendMessage('Error al agregar los datos: ' + error.statusText, 'alert-danger');
        console.log(error);
      },
      () => this.frmStatus = 'Consultar'
    )
  }

  aceptarModificarRegistro(empleado: Empleado) {
    this.dataService.updateRecord$(empleado).subscribe(
      data => {
        this.msgService.sendMessage('Registro actualizado satisfactoriamente');
        this.fetchData();
      },
      error => this.msgService.sendMessage('Error al actualizar los registro: ' + error.statusText, 'alert-danger'),
      () => this.frmStatus = 'Consultar'
    )
  }

  aceptarEliminarRegistro(empleado: Empleado) {
    this.dataService.deleteRecord$(empleado).subscribe(
      () => {
        this.msgService.sendMessage('Registro eliminado satisfactoriamente');
        this.fetchData()
      },
      error => this.msgService.sendMessage('Error al eliminar el registro: ' + error.statusText, 'alert-danger'),
      () => this.frmStatus = 'Consultar'
    )
  }

}
