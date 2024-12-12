import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string = 'https://dummyapi.online/api/movies';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.url);
  }
}
