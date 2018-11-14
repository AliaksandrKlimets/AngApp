import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {User} from '../models/user.model';
import {UserService} from '../user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {

  user: User = new User();

  constructor(private router: Router, private userService: UserService) {
  }

  login() {
    this.userService.login(this.user).subscribe(data => {
      alert('success');
      this.user = data;
      sessionStorage.setItem('user', JSON.stringify(data));
      console.log(sessionStorage.getItem('user'));
    });
  }
}
