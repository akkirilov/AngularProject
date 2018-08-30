import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HotelsRoutingModule } from './hotels.routing.module';

import { CommentsModule } from '../comments/comments.module';

import { HotelsService } from '../../core/services/hotels.service';

import { HotelsComponent } from './hotels/hotels.component';
import { HotelComponent } from './hotel/hotel.component';
import { HotelAddComponent } from './hotel-add/hotel-add.component';
import { HotelEditComponent } from './hotel-edit/hotel-edit.component';
import { HotelDeleteComponent } from './hotel-delete/hotel-delete.component';
import { HotelReviewComponent } from './hotel-review/hotel-review.component';

@NgModule({
  imports: [
    CommonModule,
    CommentsModule,
    ReactiveFormsModule,
    HotelsRoutingModule
  ],
  declarations: [
    HotelComponent,
    HotelAddComponent,
    HotelsComponent,
    HotelEditComponent,
    HotelDeleteComponent,
    HotelReviewComponent
  ],
  exports: [
    HotelComponent,
  ],
  providers: [
    HotelsService
  ]
})
export class HotelsModule { }
