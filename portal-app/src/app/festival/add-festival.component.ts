import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {FestivalService} from './festival.service';
import {Festival} from '../models/festival.model';
import {Artist} from '../models/artist.model';
import {ArtistService} from '../artist/artist.service';
import {Time} from '@angular/common';

@Component({
  templateUrl: './add-festival.component.html'
})
export class AddFestivalComponent {

  festival: Festival = new Festival();
  artists: Artist[];
  time: Time;
  artList: Artist[];

  constructor(private router: Router, private festivalService: FestivalService, private artistService: ArtistService) {
    this.festival.genres = [];
    this.festival.artists = [];
    this.festival.artistsIdList = [];
    this.initData();
  }

  initData() {
    this.artistService.getArtists()
      .subscribe(data => {
        this.artists = data;
      });
  }


  createFestival(): void {
    this.festival.festTime = this.time.toString();
  this.festival.artists.forEach(data => this.festival.artistsIdList.push(data.id));
    this.festivalService.addFestival(this.festival)
      .subscribe(data => {
        alert('Festival created successfully.');
      });
    this.festival = new Festival();
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

  removeArtist(artist: Artist) {
    const index = this.festival.artists.indexOf(artist);
    this.festival.artists.splice(index, 1);
  }

  addArtist(artist: Artist) {
    const index = this.festival.artists.indexOf(artist);
    if (index < 0) {
      this.festival.artists.push(artist);
    }
  }
}
