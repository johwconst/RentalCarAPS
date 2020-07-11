import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocacaoService } from "src/app/services/locacao.service";
import { Locacao } from "src/app/models/locacao";
import { CarService } from "src/app/services/car.service";
import { Usuario } from '../models/usuario';
import { Seguradora } from "../models/seguradora";
import { Car } from "../models/car";

@Component({
  selector: 'app-locacao',
  templateUrl: './locacao.component.html',
  styleUrls: ['./locacao.component.css']
})

export class LocacaoComponent implements OnInit {
  
  locacao = {} as Locacao;
  locacaos: Locacao[];
  usuario = {} as Usuario;
  usuarios: Usuario[];
  seguradora = {} as Seguradora;
  seguradoras: Seguradora[];
  car = {} as Car;
  cars: Car[];

  constructor(private LocacaoServices: LocacaoService, CarSevice: CarService) {}

  
  ngOnInit() {
    this.getLocs();
    this.getUsersNames();
    this.getCarNames();
    this.getSegNames();
  }

  // defini se uma seguradora será criada ou atualizada
  saveLoc(form: NgForm) {
    if (this.locacao.id !== undefined) {
      this.LocacaoServices.updateLoc(this.locacao).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.LocacaoServices.saveLoc(this.locacao).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  // Chama o serviço para obtém todos os usuarios
  getLocs() {
    this.LocacaoServices.getLoc().subscribe((locacaos: Locacao[]) => {
      this.locacaos = locacaos;
    });
  }

  getUsersNames() {
    this.LocacaoServices.getClienteNames().subscribe((usuarios: Usuario[]) => {
      this.usuarios = usuarios;
    });
  }

  getSegNames() {
    this.LocacaoServices.getSegNames().subscribe((seguradoras: Seguradora[]) => {
      this.seguradoras = seguradoras;
    });
  }

  getCarNames() {
    this.LocacaoServices.getCarNames().subscribe((cars: Car[]) => {
      this.cars = cars;
    });
  }

  // deleta um usuario
  deleteLoc(locacao: Locacao) {
    this.LocacaoServices.deleteLoc(locacao).subscribe(() => {
      this.getLocs();
    });
  }

  // copia o usuario para ser editado.
  editLoc(locacao: Locacao) {
    this.locacao = { ...locacao };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getLocs();
    form.resetForm();
    this.locacao= {} as Locacao;
  }

}
