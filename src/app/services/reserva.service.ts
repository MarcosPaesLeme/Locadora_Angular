import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Reserva } from "../reserva";
// import { Filme } from "../filme";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': sessionStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private baseUri = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  reservar(filme: any) {
    console.log('Vendo o que vai para a minha requisão no banco', filme);
    console.log(httpOptions);
    // return this.http.post<User>(this.baseUri + '/userClient/authenticate', user, httpOptions);
    return this.http.post(
      `${this.baseUri}/userClient/cadastraReserva`,
      filme,
      httpOptions
    );
  }
  async readReservas(idUsuario: String): Promise<any> {
    return await this.http.get(`${this.baseUri}/userClient/trazReservasDoUsuario/${idUsuario}`, httpOptions).toPromise();
  }
}
