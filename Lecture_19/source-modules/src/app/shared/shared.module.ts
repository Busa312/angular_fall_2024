import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';




@NgModule({
  declarations: [
  
    ButtonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    ButtonComponent
  ]
})
export class SharedModule { }
