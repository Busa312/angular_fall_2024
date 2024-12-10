import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'source';

  constructor(private router: Router) {
  }

  public navigateTo(path: string): void {
    this.router.navigate([path])
  }
}
