import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'source';
  public text: string = 'ragac text';
  private counter: number = 0;
  public shouldShow: boolean = true;
  public showText: string = 'should show';
  public dataArray: string[] = ['ragac', 'text', 'array', 'kenti'];

  handleClick() {
    console.log('clicked');
    this.text = 'new text' + ++this.counter;
    console.log(this.text);
  }

  handleButtonClick(text: string) {
    this.showText = text;
    this.shouldShow = !this.shouldShow;
  }
}
