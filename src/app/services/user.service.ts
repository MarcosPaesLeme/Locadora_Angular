import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../user';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private baseUri = 'http://localhost:3000';

  // private headers =  new HttpHeaders().set('Content-Type','applicantion/json');

  constructor(private http: HttpClient) { }

  logarUsuario(user: User): Observable<User> {
      console.log( user );
    // return this.http.post<User>(this.baseUri + '/userClient/authenticate', user, httpOptions);
    return this.http.post<User>(`${this.baseUri}/userClient/authenticate`, user, httpOptions);
  }
}
