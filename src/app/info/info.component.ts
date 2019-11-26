import { Component, OnInit, Input } from '@angular/core';
import { User } from '../User';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UsuarioService }  from '../usuario.service';



@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})


export class InfoComponent implements OnInit {
@Input() usuarios: User;
  constructor(
    private route: ActivatedRoute,
    private UsuarioService: UsuarioService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.UsuarioService.getUser(id)
    .subscribe(usuarios => this.usuarios = usuarios);
}

}
