import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Artist} from '../models/artist.model';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ArtistService {

  constructor(private http: HttpClient) {
  }

  private artistUrl = 'http://localhost:8080/artists';

  public getArtists() {
    return this.http.get<Artist[]>(this.artistUrl);
  }

  public getArtist(id: number) {
    return this.http.get<Artist>(this.artistUrl + '/' + id);
  }

  public createArtist(artist: Artist) {
    console.log(artist.genres);
    return this.http.post(this.artistUrl + '/add', artist);
  }

  public deleteArtist(artist) {
    return this.http.delete(this.artistUrl + '/delete/' + artist.id);
  }


  public updateArtist(artist) {
    return this.http.put(this.artistUrl + '/update/artist/' + artist.id, artist);
  }
}
