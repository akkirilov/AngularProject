import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HomeHotelsComponent } from './home-hotels/home-hotels.component';
import { HomeHotelComponent } from './home-hotel/home-hotel.component';
import { HomeCommentsComponent } from './home-comments/home-comments.component';
import { HomeCommentComponent } from './home-comment/home-comment.component';
import { BannedComponent } from './banned/banned.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlueScreenComponent } from './blue-screen/blue-screen.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HomeComponent,
    HomeHotelsComponent,
    HomeHotelComponent,
    HomeCommentsComponent,
    HomeCommentComponent,
    BannedComponent,
    NotFoundComponent,
    BlueScreenComponent
  ],
  exports: [
    HomeComponent
  ],
  providers: [
  ]
})
export class LandingModule { }
