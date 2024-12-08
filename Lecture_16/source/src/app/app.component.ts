import { Component, Inject } from '@angular/core';
import { DataService } from './data.service';
import { CONFIG } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  

  constructor(private dataService: DataService, @Inject(CONFIG) private config: string) {
    // console.log(this.dataService.getData())

    // this.dataService.field1 = "rame strings";

    // console.log(this.dataService.field1);
    // console.log(this.config);
  }

}
