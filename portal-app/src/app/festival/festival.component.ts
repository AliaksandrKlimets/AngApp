import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {FestivalService} from './festival.service';
import {Festival} from '../models/festival.model';
import {User} from '../models/user.model';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-festival',
  templateUrl: './festival.component.html',
  styles: []
})
export class FestivalComponent {

  festivals: Festival[];
  user: User = new User();
  date: Date = new Date();
  id: number;

  constructor(private router: Router, private festivalService: FestivalService) {
    this.initContent();
  }

  initContent() {
    this.festivalService.getFestivals()
      .subscribe(data => {
        this.festivals = data;
        data.forEach(a => console.log(a.available));
      });
  }

  deleteFestival(festival: Festival): void {
    this.festivalService.deleteFestival(festival)
      .subscribe(data => {
        this.festivals = this.festivals.filter(u => u !== festival);
      });
  }

  addAnon(user: User) {
    this.festivalService.addAnon(user, this.id).subscribe(data => console.log(data));

    for (let i = 0; i < this.festivals.length; i++) {
      if (this.festivals[i].id === this.id) {
        this.festivals[i].participants.push(user);
      }
    }
  }


  addId(idnt: number) {
    this.id = idnt;
  }

  closeAvailable(festival: Festival) {
    this.festivalService.closeAvailable(festival).subscribe(data => {
      console.log('DONE');
      festival.available = false;
    });
  }

  openAvailable(festival: Festival) {
    this.festivalService.openAvailable(festival).subscribe(data => {
      console.log('DONE');
      festival.available = true;
    });
  }
}
