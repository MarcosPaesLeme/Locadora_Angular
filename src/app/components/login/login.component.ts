import { Component, OnInit, Input, Output } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private user: User;

  constructor(private _userService: UserService, public router: Router) { }

  ngOnInit() {
    this.user = new User();
  }

  loginUsuario() {
    console.log('Primeiro' + this.user);
    this._userService.logarUsuario(this.user).subscribe(
      data => {
        // Setar o token e session storage no angula
        // console.log('user.email ' + data.id);
        console.log('Segundo ' + data.id);
        console.log('Terceiro ' + data.email);
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('user.email', data.email);
        sessionStorage.setItem('user.id', data.id);
        this.router.navigateByUrl('/filmes');
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

}
