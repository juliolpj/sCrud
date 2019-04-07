import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {
  private subject = new Subject<any>();
   
  constructor() {
  }

  sendMessage(message: string, tipo: string = 'alert-success') {
    this.subject.next({ text: message, tipo: tipo });
  }

  clearMessages() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

}
