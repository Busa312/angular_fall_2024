import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  title = 'source';

  data: any;

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.dataService.getData().subscribe(val => {
      this.data = val;
    })
  }


}
