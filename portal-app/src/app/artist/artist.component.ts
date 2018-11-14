import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {  ArtistService} from './artist.service';
import {Artist} from '../models/artist.model';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent   {

  artists: Artist[];

  constructor(private router: Router, private artistService: ArtistService) {
    this.initContent();
  }

  initContent() {
    this.artistService.getArtists()
      .subscribe( data => {
        this.artists = data;
      });
  }

  deleteArtist(artist: Artist): void {
    this.artistService.deleteArtist(artist)
      .subscribe( data => {
        this.artists = this.artists.filter(u => u !== artist);
      });
  }
}
