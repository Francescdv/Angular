import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {


  //i18nSelect
  nombre: string = 'Susana';
  genero:string='femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino':'invitarla'


  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Hernando', 'Marta', 'Nara' ];

  clientesMapa =  {
    '=0' : 'no tenemos ningún clinte esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos  2 clientes esperando',
    'other':'tenemos # clientes esperando'

  }


}
