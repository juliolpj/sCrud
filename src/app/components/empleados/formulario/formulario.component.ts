import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: []
})
export class FormularioComponent implements OnInit {
  @Input() frmStatus: string;

  constructor() { }

  ngOnInit() {
  }

  cancelar() {
    this.frmStatus = 'Consultar';
  }
}
