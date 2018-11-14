import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Subscription} from 'rxjs';
import {ArtistService} from './artist.service';
import {Artist} from '../models/artist.model';

@Component({
  templateUrl: './update-artist.component.html'
})
export class UpdateArtistComponent {

  artist: Artist = new Artist();
  id: number;
  private routeSubscription: Subscription;

  constructor(private router: Router, private artistService: ArtistService, private activateRoute: ActivatedRoute) {
    this.routeSubscription = this.activateRoute.params.subscribe(data => this.id = data['id']);
    artistService.getArtist(this.id).subscribe(data => this.artist = data);
  }


  updateArtist(): void {

    this.artistService.updateArtist(this.artist)
      .subscribe(data => {
        alert('Artist updated successfully.');
      });
    this.router.navigateByUrl('/artists');
  }

  removeGenre(genre: any) {
    const index = this.artist.genres.indexOf(genre);
    this.artist.genres.splice(index, 1);
  }

  addGenre(genre: string) {
    const index = this.artist.genres.indexOf(genre);
    if (index < 0) {
      this.artist.genres.push(genre);
    }
  }
}
