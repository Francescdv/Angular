import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/listado/heroes.module';
import { ContadorModule } from './contador/contador.modulo';
import { DbzModule } from './dbz/dbz.module';


@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
