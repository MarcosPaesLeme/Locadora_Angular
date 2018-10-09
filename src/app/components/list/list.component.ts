import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../../services/reserva.service';
import { Reserva } from '../../reserva';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private reservas: any[] = [];
  constructor( private _reservasService: ReservaService, private router: Router) { }

  async ngOnInit() {
     if (sessionStorage.getItem('token') === undefined) {
        this.router.navigate(['/login']);
     }
    await this.readReservasUsuario();
  }

  async readReservasUsuario() {
    const userId = sessionStorage.getItem('user.id');
    try {
      this.reservas = await this._reservasService.readReservas(userId);
    } catch (error) {
      console.log(error);
    }
  }


}
