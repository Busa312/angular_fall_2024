import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html', 
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnInit, OnChanges {
  
  @Input({required: true}) text: string = '';
  @Output() buttonClick = new EventEmitter<string>();
  @Input() type: 'primary' | 'danger' = 'primary';

  handleClick() {
    this.buttonClick.emit(this.text);
  }

  ngOnInit() {
    console.log(this.type);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
