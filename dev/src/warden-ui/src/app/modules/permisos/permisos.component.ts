import { Component, OnInit } from '@angular/core';
import { NavegarService } from '../../core/navegar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../shared/entities/usuario';
import { Observable, BehaviorSubject } from 'rxjs';
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
  permisos_filtrados$: BehaviorSubject<Permiso[]>;
    
  constructor(
    private navegar: NavegarService,
    private service: WardenService
    ) { }


  ngOnInit() {
    this.permiso$ = this.service.obtenerPermisosDisponibles();

    // TODAVIA FALTA CON MIGUEL VER BIEN CODIGO: ESTO NO ES LA SOLUCION IDEAL!!!
    this.permisos_filtrados$ = new BehaviorSubject<Permiso[]>([]);
  }

    
  usuario_seleccionado(usuario) {

    // TODAVIA FALTA CON MIGUEL VER BIEN CODIGO: ESTO NO ES LA SOLUCION IDEAL!!!

    let permisos_usuario$ = this.service.buscarPermisos(usuario.id);
    let permisos_totales$ = this.permiso$;

    let permisos_procesados2$ : Observable<Permiso[]> = this.permiso$.pipe(
      mergeMap(permisos => {
        return permisos_usuario$.pipe(
          map(ps => {
            let permisos_procesados : Permiso[] = [];
            permisos.forEach(p => {
              permisos_procesados.push(p);
              if (ps.includes(p.permiso)) {
                p.habilitado = true;
              }else{
                p.habilitado = false;
              }
            })
            return permisos_procesados;
          }),
          tap(v => console.log(v))
        )
      })
    )

    permisos_procesados2$.subscribe(ps => {
      this.permisos_filtrados$.next(ps);
    })


    let permisos_procesados$ = permisos_usuario$.pipe(
      map(permisos_usuario => {

      })
    )

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