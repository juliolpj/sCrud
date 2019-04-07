import { Component, OnInit } from '@angular/core';
import { MensajesService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styles: []
})
export class MensajesComponent implements OnInit {
  msg: string;
  tipo: string;
 
  constructor(private msgService: MensajesService) {
    msgService.getMessage().subscribe(
      msg => {
        this.msg = msg.text;
        this.tipo = msg.tipo;
      }
    )
  }

  ngOnInit() {
  }

  closeAlert(): void {
    this.msg = '';
  }

}
