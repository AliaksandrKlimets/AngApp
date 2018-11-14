import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {FestivalService} from './festival.service';
import {Festival} from '../models/festival.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-festival-genres',
  templateUrl: './fest-genres.component.html',
  styles: []
})
export class FestGenresComponent  {

  festivals: Festival[] = [];
  genre: string;
  private routeSubscription: Subscription;

  constructor(private router: Router, private festivalService: FestivalService, private activateRoute: ActivatedRoute) {
    this.routeSubscription = this.activateRoute.params.subscribe(data => {
      this.genre = data['genre'];
      this.initContent();
    });

  }



  public initContent() {
    this.festivalService.getFestivalsByGenre(this.genre)
      .subscribe(data => {
        this.festivals = data;
        console.log(data);
      });
  }
}
