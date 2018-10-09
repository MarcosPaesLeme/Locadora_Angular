import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ListComponent } from './components/list/list.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// Criando as minhas rotas
import { RouterModule, Routes} from '@angular/router';

// Importando meus servicos
import { FilmeService } from './services/filme.service';
import { UserService } from './services/user.service';
import { ReservaService } from './services/reserva.service';

// Importando o protocolo HTTP
import { HttpClientModule } from '@angular/common/http';

// Importando o module
import { FormsModule } from '@angular/forms';
import { FilmesComponent } from './components/filmes/filmes.component';
import { ReservasComponent } from './components/reservas/reservas.component';


// Fazendo as configurações da minhas rotas
const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' }, // path caminho da URL | Rota que será redirecionada | Pega a rota toda
  {path: 'login', component: LoginComponent},
  {path: 'listaReservas', component: ListComponent},
  {path: 'filmes', component: FilmesComponent},
  {path: 'reservas', component: ReservasComponent},
  // Jeito de passar o id entre components
  {path: 'detalhes/:id', component: FilmesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    NavbarComponent,
    FilmesComponent,
    ReservasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [FilmeService, UserService, ReservaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
