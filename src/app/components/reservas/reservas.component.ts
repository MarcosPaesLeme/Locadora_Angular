import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservaService } from '../../services/reserva.service';
import { Router } from '@angular/router';
import { Filme } from '../../filme';
import { Reserva } from '../../reserva';
import * as moment from 'moment';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {
  private filme: Filme;
  private reserva: Reserva;
  private reservas: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private _reservaService: ReservaService, private router: Router) { }

  ngOnInit() {
    this.filme = new Filme();
    this.reserva = new Reserva();
    this.activatedRoute.queryParams.subscribe(params => {
      this.filme._id = params.id;
      this.filme.nome = params.nome;
      this.filme.lancamento = params.lancamento;
      console.log('Meu id', params.id);
      console.log('Meu nome', params.nome);
      console.log('Meu lancamento', params.lancamento);
    });
    this.showDadosRent(this.filme.lancamento);
  }

  reservar() {
    this.reserva.tempoMinimo = 2;
    this.reserva.idUsuario = sessionStorage.getItem('user.id');
    this._reservaService.reservar(this.reserva).subscribe(
      data => {
        // this.reserva.tempoMinimo = 2;
        console.log(data);
        this.router.navigate(['/filmes']);
      },
      error => {
        console.log(error);
      });
  }

  showDadosRent(lancamento) {
    console.log('Chegando no meu showRent', lancamento);
    // tslint:disable-next-line:radix
    this.reserva.preco = this.calcularValorDaReserva(parseInt(this.calculaPrazoDaReserva(lancamento)));
    this.reserva.idUsuario = sessionStorage.getItem('user.id');
    this.reserva.Filmes = this.filme.nome;
    this.reservas[0] = this.reserva;
  }

  calculaPrazoDaReserva (lancamento) {
    console.log('Data que vem ', lancamento);
    const dataNoBanco = lancamento; // Data de lançamento do filme
    const data = moment(dataNoBanco, 'MM/DD/YY');
    console.log('Data convertida ', data);
    // Recebe a data como foi armazenada no banco e converte
    const converteDataBanco = moment(dataNoBanco, 'DD/MM/YYYY').format('YYYY-MM-DD');
    console.log('Data convertidada ' , converteDataBanco);
    const dataAtual = moment(); // Pega sempre a data atual do sistema
    const totalDias = dataAtual.diff(converteDataBanco, 'days'); // Faz o cálculo da diferença de dias entre a data
    console.log('Total de dias', totalDias);
    return totalDias.toString();
 }

   calcularValorDaReserva(qtdeDias) {
    if (qtdeDias <= 182.5) {
        return 14.99;
    } else if (qtdeDias <= 547.501) {
        return 7.99;
    } else if (qtdeDias > 547.501  && 1460 ) {
        return 3.99;
    } else {
        return 1.99;
    }
}
}
