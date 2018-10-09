import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmeService } from '../../services/filme.service';
import { Filme } from '../../filme';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {

  private filmes: Filme;
  private movies: any[] = [];
  constructor(private _filmeService: FilmeService, private router: Router) { }

  ngOnInit() {
  if (sessionStorage.getItem('token') === undefined) {
    this.router.navigate(['/login']);
  }

  this.readMovies();
  }

  readMovies() {
    // this.filmes = new Filme();
    this._filmeService.readMovies().subscribe((
      data: any[]) => {
        this.movies = data;
        console.log(this.movies);
        // tslint:disable-next-line:curly
        for ( let i = 0; i < this.movies.length ; i++) {
          if (this.movies[i].tipo === true) {
            this.movies[i].tipo = 'DVD';
          } else {
            this.movies[i].tipo = 'Blue-ray';
          }
        }
      },
      error => {
        console.log(error);
      });
  }

  reservar(filme: Filme) {
     // console.log(filme);
    this.router.navigate(['/reservas'], ({
      queryParams: {
        id: filme._id,
        nome: filme.nome,
        lancamento: filme.lancamento
      }
    }));
  }

}
