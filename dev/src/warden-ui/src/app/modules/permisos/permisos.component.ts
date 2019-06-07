import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavegarService } from '../../core/navegar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../shared/entities/usuario';
import { Observable, BehaviorSubject, Subject, Subscription } from 'rxjs';
import { Permiso } from '../../shared/entities/warden';
import { WardenService } from '../../shared/services/warden.service';
import { map, mergeMap, tap } from 'rxjs/operators';
import { UsersService } from 'src/app/shared/services/users.service';


@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.scss']
})
export class PermisosComponent implements OnInit, OnDestroy {

  susbcriptions: Subscription[] = [];

  ngOnDestroy(): void {
    this.susbcriptions.forEach(s => s.unsubscribe());  
  }

  usuario$ : Observable<Usuario>;
  permiso$: Observable<Permiso[]>;
  permisos_filtrados$: Observable<Permiso[]>;

  constructor(
    private navegar: NavegarService,
    private service: WardenService,
    private userService: UsersService,
    private route: ActivatedRoute
    ) { }


  ngOnInit() {
    this.permiso$ = this.service.obtenerPermisosDisponibles();

    // TODAVIA FALTA CON MIGUEL VER BIEN CODIGO: ESTO NO ES LA SOLUCION IDEAL!!!
    this.permisos_filtrados$ = new BehaviorSubject<Permiso[]>([]);

    let usuario_seleccionado$ = this.route.queryParams.pipe(
      map(params => {
        return params['uid'];
      })
    )

    this.usuario$ = usuario_seleccionado$.pipe(
      mergeMap(uid => this.userService.buscarPersonaPorUid(uid) )
    )

    let permisos_usuario$ = usuario_seleccionado$.pipe(
      mergeMap(uid => {
        return this.service.buscarPermisos(uid);
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
                  habilitado: p.habilitado
              }
              if (ps.includes(p.permiso)) {
                  p2.habilitado = true;
              }
              permisos_procesados.push(p2)

            })
            return permisos_procesados;
          }),
        )
      })
    )

  }
    
  usuario_seleccionado(usuario) {
    this.susbcriptions.push(this.navegar.navegar({url:'/sistema/permisos', params:{uid: usuario.id}}).subscribe());
  }

  guardar_permisos(){
    console.log('Entro')
    

  }

  volver() {
    this.navegar.volver().subscribe().unsubscribe();
  }
}