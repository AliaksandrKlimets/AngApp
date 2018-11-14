import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {FestivalService} from './festival.service';
import {Festival} from '../models/festival.model';
import {Subscription} from 'rxjs';

@Component({
  templateUrl: './update-fest.component.html'
})
export class UpdateFestComponent {

  festival: Festival = new Festival();
  fest: Festival = new Festival();
  id: number;
  private routeSubscription: Subscription;

  constructor(private router: Router, private festivalService: FestivalService, private activateRoute: ActivatedRoute) {
    this.routeSubscription = this.activateRoute.params.subscribe(data => this.id = data['id']);
    festivalService.getFestival(this.id).subscribe(data => this.festival = data);
  }


  updateFestival(): void {
    this.fest = this.festival;
    this.fest.participants = [];
    this.fest.artists = [];
    this.festivalService.updateFestival(this.fest)
      .subscribe(data => {
        alert('Festival updated successfully.');
      });
    this.router.navigateByUrl('/festivals');
  }

  removeGenre(genre: any) {
    const index = this.festival.genres.indexOf(genre);
    this.festival.genres.splice(index, 1);
  }

  addGenre(genre: string) {
    const index = this.festival.genres.indexOf(genre);
    if (index < 0) {
      this.festival.genres.push(genre);
    }
  }
}
