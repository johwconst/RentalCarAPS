import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Seguradora } from 'src/app/models/seguradora';
import { SeguradoraService } from "src/app/services/seguradora.service";



@Component({
  selector: 'app-seguradora',
  templateUrl: './seguradora.component.html',
  styleUrls: ['./seguradora.component.css']
})

export class SeguradoraComponent implements OnInit {

  seguradora = {} as Seguradora;
  seguradoras: Seguradora[];

  constructor(private UsuarioService: SeguradoraService) {}
  
  ngOnInit() {
    this.getSegs();
    console.log()
  }

  // defini se um usuario será criado ou atualizado
  saveSeg(form: NgForm) {
    if (this.seguradora.id !== undefined) {
      this.UsuarioService.updateSeg(this.seguradora).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.UsuarioService.saveSeg(this.seguradora).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  // Chama o serviço para obtém todos os usuarios
  getSegs() {
    this.UsuarioService.getSeg().subscribe((seguradoras: Seguradora[]) => {
      this.seguradoras = seguradoras;
    });
  }

  // deleta um usuario
  deleteSeg(seguradora: Seguradora) {
    this.UsuarioService.deleteSeg(seguradora).subscribe(() => {
      this.getSegs();
    });
  }

  // copia o usuario para ser editado.
  editUser(useguradora: Seguradora) {
    this.seguradora = { ...this.seguradora };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getSegs();
    form.resetForm();
    this.seguradora = {} as Seguradora;
  }

}
