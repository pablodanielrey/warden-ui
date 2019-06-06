import { Component, OnInit } from '@angular/core';
import { NavegarService } from '../../core/navegar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../shared/entities/usuario';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { Permiso } from '../../shared/entities/warden';
import { WardenService } from '../../shared/services/warden.service';
import { map, mergeMap, tap } from 'rxjs/operators';


@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.scss']
})
export class PermisosComponent implements OnInit {

  usuario : Usuario = null;
  permiso$: Observable<Permiso[]>;
  permisos_filtrados$: Observable<Permiso[]>;
    
  usuario_seleccionado$: Subject<any> = new Subject<any>();

  constructor(
    private navegar: NavegarService,
    private service: WardenService
    ) { }


  ngOnInit() {
    this.permiso$ = this.service.obtenerPermisosDisponibles();

    // TODAVIA FALTA CON MIGUEL VER BIEN CODIGO: ESTO NO ES LA SOLUCION IDEAL!!!
    this.permisos_filtrados$ = new BehaviorSubject<Permiso[]>([]);

    let permisos_usuario$ = this.usuario_seleccionado$.pipe(
      mergeMap(usuario => {
        return this.service.buscarPermisos(usuario.id);
      })
    )
    this.permisos_filtrados$ = this.permiso$.pipe(
      mergeMap(permisos => {
        return permisos_usuario$.pipe(
          map(ps => {
            let permisos_procesados : Permiso[] = [];
            permisos.forEach(p => {
              let p2 = {
                  permiso: p.permiso,
                  nombre: p.nombre,
                  habilitado: false
              }
              if (ps.includes(p.permiso)) {
                  p2.habilitado = true;
              }
              permisos_procesados.push(p2)

            })
            return permisos_procesados;
          }),
          tap(v => console.log(v))
        )
      })
    )

  }
    
  usuario_seleccionado(usuario) {
    this.usuario_seleccionado$.next(usuario);
    this.usuario = usuario;
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