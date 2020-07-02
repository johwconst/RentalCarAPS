import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent } from 'src/app/app.component';
import { UsuarioComponent } from 'src/app/usuario/usuario.component';
import { VeiculoComponent } from 'src/app/veiculo/veiculo.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'veiculo', component: VeiculoComponent },

  ];

  @NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ]
  })

export class AppRoutingModule {}