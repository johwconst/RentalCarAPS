import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UsuarioComponent } from 'src/app/usuario/usuario.component';
import { VeiculoComponent } from './veiculo/veiculo.component';
import { SeguradoraComponent } from './seguradora/seguradora.component';
import { LocacaoComponent } from './locacao/locacao.component';
import { HomeComponent } from './home/home.component';
import { AjudaComponent } from './ajuda/ajuda.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    VeiculoComponent,
    SeguradoraComponent,
    LocacaoComponent,
    HomeComponent,
    AjudaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
