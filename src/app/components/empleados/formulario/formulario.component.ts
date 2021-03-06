import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: []
})
export class FormularioComponent implements OnInit {
  @Input() frmStatus: string;
  @Input() registro: Empleado;
  @Output() botonAceptar = new EventEmitter<Empleado>();
  @Output() botonCancelar = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  aceptar() {
    this.botonAceptar.emit(this.registro);
  }

  cancelar() {
    this.botonCancelar.emit('Consultar');
  }
}
