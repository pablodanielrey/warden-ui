import { Component, OnInit } from '@angular/core';
import { NavegarService } from '../../core/navegar.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.scss']
})
export class PermisosComponent implements OnInit {

  constructor(private navegar: NavegarService) { }

  ngOnInit() {
  }
  usuario_seleccionado(usuario) {
    console.log(usuario.id);
  }

  volver() {
    this.navegar.volver().subscribe().unsubscribe();
  }
}