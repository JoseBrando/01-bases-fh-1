import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Components
import { ContadorComponent } from './contador/contador.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component';




@NgModule({
  declarations: [
    ContadorComponent,
    HeroeComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContadorComponent,
    HeroeComponent,
    ListadoComponent
  ],
  providers: []
})
export class ComponentsModule { }