import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { APP_KEY, APP_SECRET, API_URL } from '../constants/api.constants';

import { LoginModel } from '../models/login';
import { RegisterModel } from '../models/register';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private registerUrl : string = `${API_URL}user/${APP_KEY}`;
    private loginUrl : string = `${API_URL}user/${APP_KEY}/login`;
    private logoutUrl : string = `${API_URL}user/${APP_KEY}/_logout`;

    constructor(private http : HttpClient) {  }
    
    getBasicToken() {
        return this.login({username: 'sys', password: 'aaa'});
    }
    
    isLogged() : boolean {
        return sessionStorage.getItem('authtoken') != undefined;
    }
    
    login(loginModel : LoginModel) : Observable<Object> {
        return this.http.post<Object>(this.loginUrl, JSON.stringify(loginModel));
    }
    
    register(registerModel : RegisterModel) : Observable<Object> {
        return this.http.post<Object>(this.registerUrl, JSON.stringify(registerModel));
    }
    
    logout() : Observable<Object> {
        return this.http.post<Object>(this.logoutUrl, {});
    }
    
}
