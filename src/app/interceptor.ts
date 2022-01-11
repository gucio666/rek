import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class I1 implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modified = req.clone({
      setHeaders: {
        'Authorization': 'bearer ' + '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'
      }});
    return next.handle(modified);
  }
}
