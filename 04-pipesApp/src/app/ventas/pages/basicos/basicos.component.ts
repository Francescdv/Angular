import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower: string = 'francesc';
  nombreUpper: string = 'francesc';
  nombreCompleto: string = 'frAncEsc dOmInGo';

  fecha: Date= new Date(); // el día de hoy

}
