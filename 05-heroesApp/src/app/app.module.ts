import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { HeroeTarjetaComponent } from './heroe/components/heroe-tarjeta/heroe-tarjeta.component';

//import { HeroeComponent } from './heroe/heroe/heroe.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    HeroeTarjetaComponent,
   // HeroeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
   AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
