import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelsComponent } from './hotels/hotels.component';
import { HotelsRoutingModule } from './hotels.routing.module';

@NgModule({
  imports: [
    CommonModule,
    HotelsRoutingModule
  ],
  declarations: [
    HotelsComponent
  ]
})
export class HotelsModule { }
