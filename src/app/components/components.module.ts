import { NgModule } from '@angular/core';

import { ContadorComponent } from './contador/contador.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';




@NgModule({
  declarations: [
    ContadorComponent,
    HeroeComponent
  ],
  imports: [
  ],
  exports: [
    ContadorComponent,
    HeroeComponent
  ],
  providers: []
})
export class ComponentsModule { }