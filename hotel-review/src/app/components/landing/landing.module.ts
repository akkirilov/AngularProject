import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HomeHotelsComponent } from './home-hotels/home-hotels.component';
import { HomeHotelComponent } from './home-hotel/home-hotel.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HomeComponent,
    HomeHotelsComponent,
    HomeHotelComponent
  ],
  exports: [
    HomeComponent
  ],
  providers: [
  ]
})
export class LandingModule { }
