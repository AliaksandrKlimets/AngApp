import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

import {User} from '../models/user.model';
import {UserService} from './user.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styles: []
})
export class ShowUserComponent implements OnInit {

  users: User[];
  user: User;
  id: number;

  private routeSubscription: Subscription;
  private querySubscription: Subscription;

  constructor(private router: Router, private userService: UserService, private activateRoute: ActivatedRoute) {
    this.routeSubscription = this.activateRoute.params.subscribe(data => this.id = data['id']);
  }

  ngOnInit() {
    this.userService.getUser(this.id)
      .subscribe(data => {
        this.user = data;
      });
  }

}
