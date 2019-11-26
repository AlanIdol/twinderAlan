import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { LISTA } from 'src/app/listausuarios';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios = LISTA;

  constructor() { }

  ngOnInit() {
  }

}
