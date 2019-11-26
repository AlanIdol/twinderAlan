import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PosteosComponent } from './posteos/posteos.component';
import { InfoComponent }  from './info/info.component';


const routes: Routes = [
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'posteos', component: PosteosComponent },
  { path: 'info/:id', component: InfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

@Component({
  styleUrls: [ './app.component.css' ],
  templateUrl: './app.component.html',
})
export class AppRoutingModule { }
