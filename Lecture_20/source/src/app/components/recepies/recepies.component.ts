import { Component } from '@angular/core';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrl: './recepies.component.scss'
})
export class RecepiesComponent {
  toggle() {
    console.log('yayyy')
  }
}
