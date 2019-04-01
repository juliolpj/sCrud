import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  empleados: Observable<Array<Empleado>>;

  constructor() {
    this.empleados = of(  [
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
  }

  getRecords(): Observable<Array<Empleado>> {
    return this.empleados;
  }


}
