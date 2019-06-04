import { Injectable } from '@angular/core';
import { Permiso } from '../entities/warden';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WardenService {

  permisos:Array<Permiso> = [];
  
  constructor() {
    this.setear_permisos();
   }

  private setear_permisos(){
    this.permisos = [
      new Permiso("URN_ASSISTANCE_USERS_READ","urn:assistance:users:read"),
      new Permiso("URN_ASSISTANCE_USERS_READ:MANY","urn:assistance:users:read:many"),
      new Permiso('URN_ASSISTANCE_LOGS_READ','urn:assistance:logs:read'),
      new Permiso('URN_ASSISTANCE_DEVICES_READ','urn:assistance:devices:read'),
      new Permiso('URN_SILEG_USERS_READ_RESTRICTED','urn:sileg:users:read:resticted'),
      new Permiso('URN_ASSISTANCE_REPORT_READ_SELF','urn:assistance:report:read:self'),
      new Permiso('URN_ASSISTANCE_DEVICES_WRITE','urn:assistance:devices:write')
    ]
  }

  obtenerPermisosDisponibles(): Observable<Permiso[]> {
    return of(this.permisos);
  }

  buscarPermisos(uid:string): Observable<Permiso[]>{
    let permisosUsuario = []
    if (uid == 'd44e92c1-d277-4a45-81dc-a72a76f6ef8d'){
      permisosUsuario.push(new Permiso('URN_ASSISTANCE_USERS_READ','urn:assistance:users:read'))
      permisosUsuario.push(new Permiso('URN_ASSISTANCE_LOGS_READ','urn:assistance:logs:read'))
      permisosUsuario.push(new Permiso('URN_ASSISTANCE_DEVICES_READ','urn:assistance:devices:read'))
      permisosUsuario.push(new Permiso('URN_SILEG_USERS_READ_RESTRICTED','urn:sileg:users:read:resticted'))
    }
    if (uid == '89d88b81-fbc0-48fa-badb-d32854d3d93a'){
      permisosUsuario.push(new Permiso('URN_ASSISTANCE_USERS_READ','urn:assistance:users:read'))
      permisosUsuario.push(new Permiso('URN_ASSISTANCE_REPORT_READ_SELF','urn:assistance:report:read:self'))
      permisosUsuario.push(new Permiso('URN_ASSISTANCE_DEVICES_WRITE','urn:assistance:devices:write'))
    }
    return of(permisosUsuario)
  }

}
