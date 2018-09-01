import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';

import { HotelsModule } from './components/hotels/hotels.module';
import { AuthenticationModule } from '../app/components/authentication/authentication.module';

import { AuthGuard } from './core/guards/auth/auth.guard';

import { HomeComponent } from './components/landing/home/home.component';
import { BlueScreenComponent } from './components/landing/blue-screen/blue-screen.component';
import { BannedComponent } from './components/landing/banned/banned.component';
import { NotFoundComponent } from './components/landing/not-found/not-found.component';

const routes : Routes = [ 
       {path: '', component: HomeComponent },
       {path: 'banned', component: BannedComponent },
	   {path: 'blue-screen', component: BlueScreenComponent },
       {path: 'auth', loadChildren: '../app/components/authentication/authentication.module#AuthenticationModule'},
       {path: 'hotels', loadChildren: '../app/components/hotels/hotels.module#HotelsModule'},
       {path: 'users', loadChildren: '../app/components/users/users.module#UsersModule'},
       {path: '**', component: NotFoundComponent },
   ];

@NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
})
export class AppRouting { }
