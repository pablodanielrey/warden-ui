import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavegarService } from '../../core/navegar.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../../shared/entities/usuario';
import { Observable, Subscription } from 'rxjs';
import { Permiso } from '../../shared/entities/warden';
import { WardenService } from '../../shared/services/warden.service';
import { map, mergeMap } from 'rxjs/operators';
import { UsersService } from 'src/app/shared/services/users.service';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

interface PermisoUI {
  nombre: string,
  permiso: string,
  habilitado: boolean
}

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.scss']
})
export class PermisosComponent implements OnInit, OnDestroy {

  susbcriptions: Subscription[] = [];

  form: FormGroup = null;


  ngOnDestroy(): void {
    this.susbcriptions.forEach(s => s.unsubscribe());  
  }

  usuario$ : Observable<Usuario>;
  uid: string = '';
  permiso$: Observable<Permiso[]>;
  permisos_filtrados$: Observable<boolean>;

  constructor(
          private navegar: NavegarService,
          private service: WardenService,
          private userService: UsersService,
          private route: ActivatedRoute,
          private fb : FormBuilder) { 
      
      this.form = this.fb.group({
        permisos: this.fb.array([])
      });
  }

  get permisos() {
    return this.form.get('permisos') as FormArray;
  }

  ngOnInit() {
    this.permiso$ = this.service.obtenerPermisosDisponibles();

    let usuario_seleccionado$ = this.route.queryParams.pipe(
      map(params => {
        return params['uid'];
      })
    )
    this.susbcriptions.push(usuario_seleccionado$.subscribe(uid => this.uid = uid));

    this.usuario$ = usuario_seleccionado$.pipe(
      mergeMap(uid => { 
          return this.userService.buscarUsuario(uid);
        }
      ),
      map(usrs => usrs.length > 0 ? usrs[0] : null)
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
            this.permisos.clear();
            permisos.forEach(p => {
              let p2 : PermisoUI = {
                  permiso: p.permission,
                  nombre: '',
                  habilitado: false
              }
              if (ps.includes(p.permission)) {
                  p2.habilitado = true;
              }
              this.permisos.push(
                this.fb.group({
                  permiso: this.fb.control(p2.permiso),
                  nombre: this.fb.control(''),
                  habilitado: this.fb.control(p2.habilitado)
                })
              );
            })
            return (permisos.length > 0);
          })
        )
      })
    )
  }
    
  usuario_seleccionado(usuario) {
    this.susbcriptions.push(this.navegar.navegar({url:'/sistema/permisos', params:{uid: usuario.id}}).subscribe());
  }

  guardar_permisos() {
    this.susbcriptions.push(this.service.guardarPermisos(this.uid,this.form.value.permisos).subscribe())
  }

  volver() {
    this.navegar.volver().subscribe().unsubscribe();
  }
}