import { Component } from '@angular/core';
import { CopyTextService } from './services/copy-text.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root', // <div></div> <app-root></app-root>
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'source';
  enteredText: string = 'rame teqsti';
  show: boolean = false;
  array: any[] = [{name: 'rame', age: 20}, {name: 'kide rame', age: 22}, {name: 'kide rame', age: 22}, {name: 'kide rame', age: 22}, {name: 'kide rame', age: 22}]
  form!: FormGroup;
  onComponentClicked(text: string) {
    console.log(text);
  }

  constructor(private copyService: CopyTextService) {
    copyService.text = this.enteredText;
    this.form = new FormGroup({
      name: new FormControl(''),
      email: new FormControl('')
    });

  
  }

  submit() {
    
  }
}
