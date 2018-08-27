import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRouting } from './app.routing';

import { HotelsModule } from './components/hotels/hotels.module';
import { AuthenticationModule } from './components/authentication/authentication.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

import { HomeComponent } from './components/home/home.component';

import { TokenInterceptor } from './interceptors/token.interceptor';
import { AuthenticationService } from './core/services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRouting,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthenticationService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
        
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
