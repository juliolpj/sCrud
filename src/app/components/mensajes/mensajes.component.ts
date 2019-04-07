import { Component, OnInit } from '@angular/core';
import { MensajesService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styles: []
})
export class MensajesComponent implements OnInit {
  msg: string;
 
  constructor(private msgService: MensajesService) {
    msgService.changeEmitted$.subscribe(
      msg => this.msg = msg
    )
  }

  ngOnInit() {
  }

  closeAlert(): void {
    this.msg = '';
  }

}
