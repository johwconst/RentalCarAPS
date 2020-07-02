import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocacaoService } from "src/app/services/locacao.service";
import { Locacao } from "src/app/models/locacao";

@Component({
  selector: 'app-locacao',
  templateUrl: './locacao.component.html',
  styleUrls: ['./locacao.component.css']
})

export class LocacaoComponent implements OnInit {

  locacao = {} as Locacao;
  locacaos: Locacao[];

  constructor(private LocacaoServices: LocacaoService) {}
  
  ngOnInit() {
    this.getLocs();
    console.log()
  }

  // defini se um usuario será criado ou atualizado
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

  // deleta um usuario
  deleteLoc(locacao: Locacao) {
    this.LocacaoServices.deleteLoc(locacao).subscribe(() => {
      this.getLocs();
    });
  }

  // copia o usuario para ser editado.
  editLoc(locacao: Locacao) {
    this.locacao = { ...this.locacao };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getLocs();
    form.resetForm();
    this.locacao= {} as Locacao;
  }

}
