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
  empleados: Observable<Array<Empleado>>;

  constructor(public data: DataService) {
  }

  ngOnInit() {
    this.empleados = this.data.getRecords();
    
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
