import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../../services/reserva.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _reservaService: ReservaService, private router: Router) { }

  ngOnInit() {
  }

  readReservas() {
    this.router.navigate(['/listaReservas']);
  }
}
