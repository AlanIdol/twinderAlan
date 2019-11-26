import { Injectable } from '@angular/core';
import { User } from './User';
import { LISTA } from './listausuarios';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }
  
getUser(): Observable<User[]> {
  return of(LISTA);
}
}
