import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SeachGifsResponse, Gif } from '../Interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

 private apiKey:string = '67bIDIPs7UScL5rrko5C25sfoUJ1Be1c'
private servicioUrl: string = 'https://api.giphy.com/v1/gifs'
 public resultados:Gif[] = [];


 private _historial: string[] = [];

 get historial(){

   return [...this._historial]
 }

 constructor(private http:HttpClient){
 this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
 this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  //if( localStorage.getItem('historial')){
   // this._historial = JSON.parse(localStorage.getItem('historial')!)
 // };

 }

 buscarGifs( query:string){

  query = query.trim().toLocaleLowerCase();

  if(!this._historial.includes(query)){
    this._historial.unshift(query);
    this._historial = this._historial.splice(0,10);

    localStorage.setItem('historial', JSON.stringify(this._historial));


       //insertar en el inicio unshift
  }                                      //includes + ! només l'inserta sino existes

  const params = new HttpParams()
  .set('api_key', this.apiKey)
  .set('limit', '10')
  .set('q', query);

  this.http.get<SeachGifsResponse>(`${this.servicioUrl}/search`, {params})
  .subscribe( (resp) =>{

    this.resultados = resp.data;
    localStorage.setItem('resultados', JSON.stringify(this.resultados));

  });

 }


}
