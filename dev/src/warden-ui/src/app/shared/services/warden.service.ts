import { Injectable } from '@angular/core';
import { Permiso } from '../entities/warden';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WardenService {

  constructor() {
  }

  obtenerPermisosDisponibles(): Observable<Permiso[]> {
    /**
     * Retorna en obserbables los permisos de prueba
     */
    let permisos : Permiso[] = [
      {nombre: 'ASSISTANCE_USERS_READ',                                    permiso: 'urn:assistance:users:read',habilitado:false},
      {nombre: 'ASSISTANCE_USERS_READ_MANY',                               permiso: 'urn:assistance:users:read:many',habilitado:false},
      {nombre: 'ASSISTANCE_USERS_READ_MANY_RESTRICTED',                    permiso: 'urn:assistance:users:read:many:restricted',habilitado:false},
      {nombre: 'ASSISTANCE_USERS_READ_SELF',                               permiso: 'urn:assistance:users:read:self',habilitado:false},
      {nombre: 'ASSISTANCE_PLACES_READ',                                   permiso: 'urn:assistance:places:read',habilitado:false},
      {nombre: 'ASSISTANCE_PLACES_READ_MANY',                              permiso: 'urn:assistance:places:read:many',habilitado:false},
      {nombre: 'ASSISTANCE_ASSISTANCE-REPORT_READ',                        permiso: 'urn:assistance:assistance-report:read',habilitado:false},
      {nombre: 'ASSISTANCE_ASSISTANCE-REPORT_READ_MANY_RESTRICTED',        permiso: 'urn:assistance:assistance-report:read:many:restricted',habilitado:false},
      {nombre: 'ASSISTANCE_JUSTIFICATIONS-REPORT_READ',                    permiso: 'urn:assistance:justifications-report:read',habilitado:false},
      {nombre: 'ASSISTANCE_JUSTIFICATIONS-REPORT_READ_MANY_RESTRICTED',    permiso: 'urn:assistance:justifications-report:read:many:restricted',habilitado:false},
      {nombre: 'ASSISTANCE_GENERAL-ASSISTANCE-REPORT_READ',                permiso: 'urn:assistance:general-assistance-report:read',habilitado:false},
      {nombre: 'ASSISTANCE_GENERAL-ASSISTANCE-REPORT_READ_MANY_RESTRICTED',permiso: 'urn:assistance:general-assistance-report:read:many:restricted',habilitado:false},
      {nombre: 'ASSISTANCE_SCHEDULE_READ',                                 permiso: 'urn:assistance:schedule:read',habilitado:false},
      {nombre: 'ASSISTANCE_SCHEDULE_READ_SELF',                            permiso: 'urn:assistance:schedule:read:self',habilitado:false},
      {nombre: 'ASSISTANCE_SCHEDULE_READ_MANY_RESTRICTED',                 permiso: 'urn:assistance:schedule:read:many:restricted',habilitado:false},
      {nombre: 'ASSISTANCE_SCHEDULE_DELETE',                               permiso: 'urn:assistance:schedule:delete',habilitado:false},
      {nombre: 'ASSISTANCE_SCHEDULE_CREATE',                               permiso: 'urn:assistance:schedule:create',habilitado:false},
      {nombre: 'ASSISTANCE_LOGS_READ',                                     permiso: 'urn:assistance:logs:read',habilitado:false},
      {nombre: 'ASSISTANCE_LOGS_CREATE',                                   permiso: 'urn:assistance:logs:create',habilitado:false},
      {nombre: 'ASSISTANCE_DEVICES_READ',                                  permiso: 'urn:assistance:devices:read',habilitado:false},
      {nombre: 'ASSISTANCE_JUSTIFICATIONS_READ:',                          permiso: 'urn:assistance:justifications:read',habilitado:false},
      {nombre: 'ASSISTANCE_JUSTIFICATIONS_READ_MANY_RESTRICTED',           permiso: 'urn:assistance:justifications:read:many:restricted',habilitado:false},
      {nombre: 'ASSISTANCE_JUSTIFICATIONS_CREATE',                         permiso: 'urn:assistance:justifications:create',habilitado:false},
      {nombre: 'ASSISTANCE_JUSTIFICATIONS_DELETE',                         permiso: 'urn:assistance:justifications:delete',habilitado:false},
      {nombre: 'ASSISTANCE_JUSTIFICATIONS_UPDATE',                         permiso: 'urn:assistance:justifications:update',habilitado:false},
      {nombre: 'ASSISTANCE_JUSTIFICATION-DATE_READ',                       permiso: 'urn:assistance:justification-date:read',habilitado:false},
      {nombre: 'ASSISTANCE_JUSTIFICATION-DATE_READ_SELF',                  permiso: 'urn:assistance:justification-date:read:self',habilitado:false},
      {nombre: 'ASSISTANCE_JUSTIFICATION-DATE_CREATE',                     permiso: 'urn:assistance:justification-date:create',habilitado:false},
      {nombre: 'ASSISTANCE_JUSTIFICATION-DATE_CREATE_MANY_RESTRICTED',     permiso: 'urn:assistance:justification-date:create:many:restricted',habilitado:false},
      {nombre: 'ASSISTANCE_JUSTIFICATION-DATE_DELETE',                     permiso: 'urn:assistance:justification-date:delete',habilitado:false},
      {nombre: 'ASSISTANCE_JUSTIFICATION-DATE_DELETE_MANY_RESTRICTED',     permiso: 'urn:assistance:justification-date:delete:many:restricted',habilitado:false},
    ]
    return of(permisos);
  }

  buscarPermisos(uid:string): Observable<string[]>{
    /**
     * Emula la consulta de permisos para un usuario
     */
    let permisosUsuario = []
    if (uid == 'd44e92c1-d277-4a45-81dc-a72a76f6ef8d'){
      permisosUsuario.push('urn:assistance:users:read')
      permisosUsuario.push('urn:assistance:logs:read')
      permisosUsuario.push('urn:assistance:devices:read')
      permisosUsuario.push('urn:sileg:users:read:resticted')
    }
    if (uid == '89d88b81-fbc0-48fa-badb-d32854d3d93a'){
      permisosUsuario.push('urn:assistance:users:read')
      permisosUsuario.push('urn:assistance:report:read:self')
      permisosUsuario.push('urn:assistance:devices:write')
    }
    return of(permisosUsuario)
  } 
}
