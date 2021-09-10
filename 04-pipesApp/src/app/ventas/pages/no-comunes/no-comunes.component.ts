import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {


  //i18nSelect
  nombre: string = 'Gohan';
  genero:string='masculino';

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

  cambiarCliente() {
    this.nombre = 'Melisa'
    this.genero = 'femenino'
  }

  borrarCliente(){

    this.clientes.pop();

  }

  //KeyValue Pipe

  persona = {
    nonmbre: 'Francesc',
    edat: 35,
    direccion: 'Ottawa, Canada'
  }

  //Json Pipe

  heroes = [

    {nombre:'Superman',
    vuela: true
    },
    {nombre:'Robin',
    vuela: false
    },
    {nombre:'Aquaman',
    vuela: false
    }

  ]


  //Async Pepe

  miObservable  = interval(2000); //1,2,3,4...


  valorPromesa = new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve("Tenemos data de la promesa  ")
    },3000);
  });




}
