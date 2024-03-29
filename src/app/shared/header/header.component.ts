import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

declare const gapi: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor( private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  logOut() {
    this.usuarioService.logOut();
  }

}
