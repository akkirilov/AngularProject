import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HotelsModule } from './components/hotels/hotels.module';
import { AuthenticationModule } from '../app/components/authentication/authentication.module';

import { AuthGuard } from './core/guards/auth/auth.guard'; 

import { HomeComponent } from './components/landing/home/home.component';

const routes : Routes = [
       {path: '', component: HomeComponent },
       {path: 'auth', loadChildren: '../app/components/authentication/authentication.module#AuthenticationModule'},
       {path: 'hotels', loadChildren: '../app/components/hotels/hotels.module#HotelsModule'}
   ];

@NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
})
export class AppRouting { }
