import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {User} from '../models/user.model';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class UserService {


  constructor(private http: HttpClient) {
  }

  private userUrl = 'http://localhost:8080/users';


  public getUsers() {
    const headers = new HttpHeaders();
    return this.http.get<User[]>(this.userUrl, {headers: headers});
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + `/delete/` + user.id);
  }

  public createUser(user) {
    return this.http.post<User>(this.userUrl + '/add', user);
  }

  public getUser(id) {
    return this.http.get<User>(this.userUrl + '/' + id);
  }

  login(user: User) {
    return this.http.post<User>(this.userUrl + '/login', user);
  }

}
