import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { UserModel } from '../../../models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  user!: UserModel;
  edit: boolean = false;
  form!: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder){}

  ngOnInit(): void {
      this.user = this.userService.loggedInUser;

      if (this.user) {
        this.form = this.fb.group({
          username: [this.user.username, Validators.required],
          email: [this.user.email, Validators.required],
          fullname: [this.user.fullname, Validators.required]
        })
      }
  }

  save() {

    this.userService.updateUser(this.form.value).subscribe(val => {
      if (val) {
        this.user = val;
        this.edit = !this.edit;
      }
    })
    
  }

}
