import { Injectable } from '@angular/core';
import { Permiso } from '../entities/warden';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

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
    let permisos = [];
    let apiUrl = `${WARDEN_API_URL}/usuarios/${uid}`;
    return this.http.get<Permiso[]>(apiUrl).pipe(
      map(perm => {
        perm.map(p => permisos.push(p['permission']));
        return permisos;
      })
    );
  }

  guardarPermisos(uid:string,permisos:any[]):Observable<any> {
    let apiUrl = `${WARDEN_API_URL}/usuarios/${uid}`;
    return this.http.put<any>(apiUrl,permisos);
  }
  
}
