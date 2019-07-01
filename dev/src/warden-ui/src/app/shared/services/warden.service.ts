import { Injectable } from '@angular/core';
import { Permiso } from '../entities/warden';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const WARDEN_API_URL = environment.wardenApiUrl;

@Injectable({
  providedIn: 'root'
})
export class WardenService {

  constructor(private http: HttpClient) {
  }

  obtenerPermisosDisponibles(): Observable<Permiso[]> {
    return this.http.get<Permiso[]>(WARDEN_API_URL + '/permisos');
 }

  buscarPermisos(uid:string): Observable<string[]>{
    /**
     * Emula la consulta de permisos para un usuario
     * TODO Implementar busqueda de permiso para usuario
     */
    let permisosUsuario = []
    if (uid == 'd44e92c1-d277-4a45-81dc-a72a76f6ef8d'){
      permisosUsuario.push('urn:assistance:users:read')
      permisosUsuario.push('urn:assistance:logs:read')
      permisosUsuario.push('urn:assistance:devices:read')
      permisosUsuario.push('urn:sileg:users:read:resticted')
      permisosUsuario.push('urn:gelis:designations:read')
    }
    if (uid == '89d88b81-fbc0-48fa-badb-d32854d3d93a'){
      permisosUsuario.push('urn:assistance:users:read')
      permisosUsuario.push('urn:assistance:report:read:self')
      permisosUsuario.push('urn:assistance:devices:write')
      permisosUsuario.push('urn:gelis:place:create')
    }
    return of(permisosUsuario)
  } 
}
