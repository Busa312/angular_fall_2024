import { CopyTextService } from './../../services/copy-text.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text: string = 'rame teqsti';
  @Output() componentClicked = new EventEmitter(); 

  onClick() {
    this.componentClicked.emit(this.text);
  }

  constructor(private copyService: CopyTextService) {
    this.text = this.copyService.text;
  }
}
