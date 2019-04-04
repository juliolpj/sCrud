import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Empleado } from '../models/empleado';
import { environment } from '../../environments/environment';

const apiURL = environment.apiURL  + '/empleados';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  empleados: Observable<Array<Empleado>>;

  constructor(private http: HttpClient) {
  }

  getRecords$(): Observable<Array<Empleado>> {
    return this.http.get<Empleado[]>(apiURL)
      .pipe(
        catchError(this.ErrorHandle)
      );
  }

  ErrorHandle(error: HttpErrorResponse) {
    //console.log('ErrorHandle', error);
    return throwError(error);
  }
}
