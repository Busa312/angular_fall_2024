import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  field1: string = '';
  field2: number = 0;

  getData() {
    return 'Hello';
  }
  
}
