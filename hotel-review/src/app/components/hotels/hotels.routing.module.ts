import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelsComponent } from './hotels/hotels.component';
import { HotelAddComponent } from './hotel-add/hotel-add.component';
import { HotelEditComponent } from './hotel-edit/hotel-edit.component';
import { HotelDeleteComponent } from './hotel-delete/hotel-delete.component';
import { HotelReviewComponent } from './hotel-review/hotel-review.component';

import { AuthGuard } from '../../core/guards/auth/auth.guard';  

const routes : Routes = [
       {path: '', component: HotelsComponent},
       {path: 'review/:id', canActivate: [AuthGuard], component: HotelReviewComponent},
       {path: 'edit/:id', canActivate: [AuthGuard], component: HotelEditComponent},
       {path: 'delete/:id', canActivate: [AuthGuard], component: HotelDeleteComponent},
       {path: 'add', canActivate: [AuthGuard], component: HotelAddComponent}
   ];

@NgModule({
        exports: [ RouterModule ],
        imports: [ RouterModule.forChild(routes) ]
})
export class HotelsRoutingModule { }
