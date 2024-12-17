import { Injectable } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = [{
    username: 'hi',
    fullname: 'busa gadelia',
    email: 'raghac@email.com',
    password: '123'
  }];

  loggedInUser!: UserModel;

  constructor() { }

  login(userLogin: {username: string, password: string}) {
    const user = this.users.find(val => val.username === userLogin.username && val.password === userLogin.password);

    if (user) {
      this.loggedInUser = {
        username: user.username,
        email: user.email,
        fullname: user.fullname
      }
      return of(true);
    }
    return of(false);

    

  }

  updateUser(user: UserModel) {
   return of(user);
  }
}
