import {
  HttpRequest,
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private toastr : ToastrService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler)
    : Observable<HttpEvent<any>> {
      return next.handle(req)
        .pipe(catchError((err : HttpErrorResponse) => {

          switch (err.status) {
            case 400:
              break;
            case 404:
                this.toastr.error(err.error.description);
              break;
            default:
                this.toastr.error(err.error.description);
              break;
          }

          return throwError(err);
        }));
  }
}