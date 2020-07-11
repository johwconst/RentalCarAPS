import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent } from 'src/app/app.component';
import { UsuarioComponent } from 'src/app/usuario/usuario.component';
import { VeiculoComponent } from 'src/app/veiculo/veiculo.component';
import { SeguradoraComponent } from "src/app/seguradora/seguradora.component";
import { LocacaoComponent } from "src/app/locacao/locacao.component";
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'veiculo', component: VeiculoComponent },
  { path: 'seguradora', component: SeguradoraComponent },
  { path: 'aluguel', component: LocacaoComponent },
  { path: '', component: HomeComponent}
  ];

  @NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ]
  })

export class AppRoutingModule {}