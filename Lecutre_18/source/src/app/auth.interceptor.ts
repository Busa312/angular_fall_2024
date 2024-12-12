import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const clone = req.clone({
            setHeaders: {
                'customheader': 'yayyyyy'
            }
        });

        return next.handle(clone);
    }

}