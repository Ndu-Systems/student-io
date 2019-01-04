import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { USER_TOKEN } from "src/app/shared/config";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = JSON.parse(localStorage.getItem(USER_TOKEN));
        if (token) {
            request = request.clone({
                headers: request.headers.set("Authorization", "Bearer " + token)
            });
        }
        return next.handle(request);
    }
}