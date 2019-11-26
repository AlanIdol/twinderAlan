import { Component, OnInit } from '@angular/core';
import { Post } from '../Post';
import { INICIO } from '../listaposts';
@Component({
  selector: 'app-posteos',
  templateUrl: './posteos.component.html',
  styleUrls: ['./posteos.component.css']
})
export class PosteosComponent implements OnInit {

  posteos = INICIO;

  constructor() { }

  ngOnInit() {
  }

}
