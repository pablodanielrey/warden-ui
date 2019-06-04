import { Component, OnInit } from '@angular/core';
import { NavegarService } from '../../core/navegar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../shared/entities/usuario';
import { Observable } from 'rxjs';
import { Permiso } from '../../shared/entities/warden';
import { WardenService } from '../../shared/services/warden.service';

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.scss']
})
export class PermisosComponent implements OnInit {

  usuario : Usuario = null;
  permiso$: Observable<any>;
  permisosUsuario$: Observable<any>;

  diccionarioPermisos: Array<string> = ['urn:assistance:users:read','urn:assistance:users:read:many']
    
  constructor(
    private navegar: NavegarService,
    private service: WardenService
    ) { }

  ngOnInit() {
    this.permiso$ = this.service.obtenerPermisosDisponibles();
  }
    
  usuario_seleccionado(usuario) {
    this.usuario = usuario;
    this.permisosUsuario$ = this.service.buscarPermisos(usuario.id)
  }

  volver() {
    this.navegar.volver().subscribe().unsubscribe();
  }
}