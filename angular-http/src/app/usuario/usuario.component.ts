import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent implements OnInit {

  usuario = {} as Usuario;
  usuarios: Usuario[];

  constructor(private UsuarioService: UsuarioService) {}
  
  ngOnInit() {
    this.getUsers();
    console.log()
  }

  // defini se um usuario será criado ou atualizado
  saveUser(form: NgForm) {
    if (this.usuario.id !== undefined) {
      this.UsuarioService.updateUser(this.usuario).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.UsuarioService.saveUser(this.usuario).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  // Chama o serviço para obtém todos os usuarios
  getUsers() {
    this.UsuarioService.getUsers().subscribe((usuarios: Usuario[]) => {
      this.usuarios = usuarios;
    });
  }

  // deleta um usuario
  deleteUser(usuario: Usuario) {
    this.UsuarioService.deleteUser(usuario).subscribe(() => {
      this.getUsers();
    });
  }

  // copia o usuario para ser editado.
  editUser(usuario: Usuario) {
    this.usuario = { ...usuario };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getUsers();
    form.resetForm();
    this.usuario = {} as Usuario;
  }

}
