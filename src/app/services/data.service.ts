import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Empleado } from '../models/empleado';
import { environment } from '../../environments/environment';

const apiURL = environment.apiURL  + '/empleados';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  headers: HttpHeaders = new HttpHeaders( { 'Content-Type': 'application/json'});
  
  constructor(private http: HttpClient) {
  }

  getRecords$(): Observable<Array<Empleado>> {
    return this.http.get<Empleado[]>(apiURL)
      .pipe(
        catchError(this.ErrorHandle)
      );
  }

  
  addRecord$(empleado: Empleado) {
    return this.http.post(apiURL, empleado);
  }
  
  updateRecord$(empleado: Empleado) {
    console.log(empleado);
    return this.http
    .put(apiURL + '/' + empleado.id, JSON.stringify(empleado), {headers: this.headers});
  }
  
  deleteRecord$(empleado: Empleado) {
    return this.http.delete(apiURL + '/' + empleado.id, {headers: this.headers})
  }

  ErrorHandle(error: HttpErrorResponse) {
    //console.log('ErrorHandle', error);
    return throwError(error);
  }
}
