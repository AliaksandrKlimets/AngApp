import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Festival} from '../models/festival.model';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable()
export class FestivalService {
  constructor(private http: HttpClient) {
  }

  private festivalUrl = 'http://localhost:8080/festivals';

  public getFestivals() {
    return this.http.get<Festival[]>(this.festivalUrl);
  }

  public getFestival(id: number) {
    return this.http.get<Festival>(this.festivalUrl + '/' + id);
  }

  public deleteFestival(festival) {
    return this.http.delete(this.festivalUrl + `/delete/` + festival.id);
  }

  public addFestival(festival) {
    return this.http.post(this.festivalUrl + '/add', festival);
  }

  public getFestivalsByGenre(genre) {
    console.log(genre);
    return this.http.get<Festival[]>(this.festivalUrl + '/genres/' + genre);
  }

  public addAnon(user, id) {
    return this.http.post(this.festivalUrl + '/' + id + '/add/anon', user);
  }

  public updateFestival(festival: Festival) {
    return this.http.put(this.festivalUrl + '/update/festival/' + festival.id, festival);
  }

  public closeAvailable(festival: Festival) {
    return this.http.get(this.festivalUrl + '/close/available/' + festival.id);
  }

  public openAvailable(festival: Festival) {
    return this.http.get(this.festivalUrl + '/open/available/' + festival.id);
  }
}
