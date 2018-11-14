import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {ArtistService} from './artist.service';
import {Artist} from '../models/artist.model';

@Component({
  templateUrl: './add-artist.component.html'
})
export class AddArtistComponent {

  artist: Artist = new Artist();

  constructor(private router: Router, private artistService: ArtistService) {
    this.artist.genres = [];
  }

  createArtist(): void {
    this.artistService.createArtist(this.artist)
      .subscribe(data => {
        alert('Artist created successfully.');
      });
    this.artist = new Artist();
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
