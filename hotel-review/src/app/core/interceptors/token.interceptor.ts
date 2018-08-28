import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpEvent,
    HttpHandler
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

import { APP_KEY, APP_SECRET } from '../../app.constants';

const basicUrls = [
        APP_KEY,
        'login'
    ];

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private router: Router,
            private toastr : ToastrService) { }
    
    intercept(request : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>> {
        let isBasic;
        for (let u of basicUrls) {
            if (request.url.endsWith(u)) {
                isBasic = true;
            }
        }
        
        if (!isBasic && sessionStorage.getItem('authtoken')) {
            request = request.clone({
                setHeaders : {
                    'Authorization': `Kinvey ${sessionStorage.getItem('authtoken')}`,
                    'Content-Type': 'application/json' 
                }
            });
        } else {
            request = request.clone({
                setHeaders : {
                    'Authorization': `Basic ${btoa(APP_KEY+':'+APP_SECRET)}`,
                    'Content-Type': 'application/json'
                }
            });
        }
        
        return next.handle(request).pipe(tap((res : any) => {
            if (res instanceof HttpResponse) {
                if (res.url.endsWith(APP_KEY)) {
                    this.router.navigate(['/auth/login']);
                    this.toastr.success('Successfull registration!');
                } else if (res.url.endsWith('login')) {
                    sessionStorage.setItem('authtoken', res['body']['_kmd']['authtoken']);
                    sessionStorage.setItem('id', res['body']['_id']);
                    sessionStorage.setItem('username', res['body']['username']);
                    this.router.navigate(['/']);
                    this.toastr.success('Welcome, ' + res['body']['username'] + '!');
                }
            }
        }));
    }
}