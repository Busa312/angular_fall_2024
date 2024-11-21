import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

export function ageValidator(control: AbstractControl): ValidationErrors | null {
  return control.value  < 18 || control.value > 100? {age: {value: control.value}} : null;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'source';
  user: any = {
    name: '',
    email: '',
    age: ''
  }
  // reactiveForm: FormGroup = new FormGroup({
  //   name: new FormControl('heyy', [Validators.required, Validators.minLength(10), Validators.maxLength(30)]),
  //   email: new FormControl('heyy@heyy', [Validators.required, Validators.email]),
  //   age: new FormControl<number>(10, [Validators.required, Validators.min(18), Validators.max(100)])
  // });
  reactiveForm: FormGroup;
  array: string[] = ['1', '2', '3', 'ragac'];

  response: any = {
    name: 'rame saxeli',
    email: 'rame@rame.com',
    age: 10
  }
  Object = Object;

  constructor(private fb: FormBuilder) {
    // this.reactiveForm = this.fb.group({
    //   name: ['heyy', [Validators.required, Validators.minLength(10), Validators.maxLength(30)]],
    //   email: ['heyy@heyy', [Validators.required, Validators.email]],
    //   age: [10, [Validators.required, ageValidator]]
    // });

    this.reactiveForm = this.fb.group({});
    this.reactiveForm.invalid;
    this.reactiveForm.valid;
    this.reactiveForm.touched;
    this.reactiveForm.dirty;


    

    // this.array.forEach((value) => {
    //   this.reactiveForm.addControl(value, new FormControl(value));
    // });

    Object.keys(this.response).forEach((key) => {
      this.reactiveForm.addControl(key, this.fb.control(this.response[key]));
    });

    console.log(this.reactiveForm.value);

    // this.name =this.fb.control('', [Validators.required, Validators.minLength(10), Validators.maxLength(30)]);
    

    console.log(this.reactiveForm.get('age')?.errors);

    // this.reactiveForm.addControl('name', new FormControl('heyy', [Validators.required, Validators.minLength(10), Validators.maxLength(30)]));
  }

  ngOnInit(): void {
    // this.reactiveForm.get('age')?.setValidators([Validators.required, Validators.max(100),Validators.min(10)]);
    // this.reactiveForm.updateValueAndValidity();
    console.log(this.reactiveForm.get('age')?.errors);
  }

  onSubmit() {
    console.log(this.user);
  }

  onSubmitReactive() {
    // console.log(this.reactiveForm.errors);
    console.log(this.reactiveForm.value);
  }
}
