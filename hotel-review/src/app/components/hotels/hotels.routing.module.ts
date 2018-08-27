import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelsComponent } from './hotels/hotels.component';

import { AuthGuard } from '../../auth.guard'; 

const routes : Routes = [
       {path: '', component: HotelsComponent},
       {path: 'h', component: HotelsComponent}
   ];

@NgModule({
        exports: [ RouterModule ],
        imports: [ RouterModule.forChild(routes) ]
})
export class HotelsRoutingModule { }
