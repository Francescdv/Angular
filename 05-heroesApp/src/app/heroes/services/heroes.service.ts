import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor( private http: HttpClient) { }

  getHeros():Observable<Heroe[]>{
   return  this.http.get<Heroe[]>('http://localhost:3000/heroes')
  }
}


//json-server --watch db.json per activar el servidor
