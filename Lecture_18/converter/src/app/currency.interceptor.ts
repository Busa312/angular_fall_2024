import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

const API_KEY = '';

export class CurrencyInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const clone = req.clone({
            setParams: {
                'apikey': API_KEY
            }
        });

        return next.handle(clone);
    }

}