import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private userService: UserService, private router: Router){}

  login() {
    this.userService.login(this.form.value).subscribe(val => {
      if (val) {
        this.router.navigate(['user']);
      } else {
        this.form.reset();
      }
    })
  }

}
