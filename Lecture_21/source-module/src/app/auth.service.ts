import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInUser: loggedInUser | null = null;

  constructor() { }

  register(user: RegisterUser) {
    const users = JSON.parse(localStorage.getItem('users') || '[]') as RegisterUser[];
      let usernameTaken = false;
      for(let i = 0; i < users?.length; i++) {
        if (users[i].username === user.username) {
          usernameTaken = true;
          break;
        }
      }

      if (!usernameTaken) {
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users))
      }

  }

  login(user: LoginUser) {
    const users = JSON.parse(localStorage.getItem('users') || '[]') as RegisterUser[];

    users.forEach((val) => {
      if (val.username === user.username) {
        this.loggedInUser = {username: val.username, email: val.email} as loggedInUser;
      }
    });

    if (this.loggedInUser === null) {
      
    }
  }

}


interface RegisterUser {
  username: string;
  password: string;
  email: string
}

interface LoginUser {
  username: string;
  passsword: string;
}

interface loggedInUser {
  username: string;
  email: string
}