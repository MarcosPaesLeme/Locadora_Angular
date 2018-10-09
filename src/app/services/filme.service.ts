import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Filme } from '../filme';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  private baseUri = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  readMovies() {
    return this.http.get(this.baseUri + '/userClient/consultasFilmes', httpOptions);
  }

}
