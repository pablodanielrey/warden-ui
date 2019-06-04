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
    
  constructor(
    private navegar: NavegarService,
    private service: WardenService
    ) { }

  ngOnInit() {
    this.permiso$ = this.service.obtenerPermisosDisponibles();
  }
    
  usuario_seleccionado(usuario) {
    this.usuario = usuario;
    this.service.buscarPermisos(usuario.id).subscribe(per => {
      let permisosUsuario = per;
      permisosUsuario.forEach(perm => {
        this.permiso$.subscribe( per => {
          per.forEach( p => {
            if (p.permiso == perm){
              console.log('Permiso Encontrado');
              p.habilitado = true;
            }
          });          
        })
      })
   });
    
  }

  guardar_permisos(){
    console.log('Entro')
    let permisosAGuardar = []
    this.permiso$.subscribe( per => {
      per.forEach(p => {
        if (p.habilitado){
          permisosAGuardar.push(p.permiso);
        }
      });
    })
    console.log(this.usuario.id, permisosAGuardar)
  }

  volver() {
    this.navegar.volver().subscribe().unsubscribe();
  }
}