import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { vuelaPipe } from './pipes/vuela.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';




@NgModule({
  declarations: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,
    MayusculasPipe,
    vuelaPipe,
    OrdenarPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,

  ]
})
export class VentasModule { }
