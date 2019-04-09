import { Injectable } from '@angular/core';

import {InMemoryDbService} from 'angular-in-memory-web-api';
import { Empleado } from 'src/app/models/empleado';

@Injectable({
  providedIn: 'root'
})
export class MemoryService implements InMemoryDbService {

  constructor() { }

  createDb() {
    let empleados: Array<Empleado> = [
      { id: '1', nombre: 'Julio Pérez', cargo: 'Director', email: 'juliolpj@hotmail.com'},
      { id: '2', nombre: 'Gabriela Pérez', cargo: 'Desarrolladora de Software', email: 'gabrielapr@mail.com'},
      { id: '3', nombre: 'Larry Pérez', cargo: 'Programador', email: 'larryepr@mail.com'}
    ]
    return {empleados};
  }

}
