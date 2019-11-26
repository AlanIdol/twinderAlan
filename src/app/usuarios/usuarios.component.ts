import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UsuarioService } from 'src/app/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {

  usuarios: User[];

  selectedUser: User;
  onSelect(usuarios: User): void {
    this.selectedUser = usuarios;
  }
  getUser(): void {
    this.UsuarioService.getUser()
        .subscribe(usuarios => this.usuarios = usuarios);
  }

  

  constructor(private UsuarioService: UsuarioService) { }

  ngOnInit() {
    this.getUser();
  }






}
