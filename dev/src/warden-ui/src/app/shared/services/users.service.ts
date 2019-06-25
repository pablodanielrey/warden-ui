import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario, Mail } from '../entities/usuario'
import { Permiso } from '../entities/warden';
import { HttpParams, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.ui';
import { map } from 'rxjs/operators';

const USERS_API_URL = environment.usersApiUrl;

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
    
  }

  //buscarPersonas(texto: string): Observable<any[]> {
  //  let personas2 = this.usuarios.filter( v => 
  //      v.nombre.toLowerCase().includes(texto.toLowerCase()) ||
  //      v.apellido.toLowerCase().includes(texto.toLowerCase()) ||
  //      v.dni.toLowerCase().includes(texto.toLocaleLowerCase())
  //    );
  //  return of(personas2);
  //}
 
  buscarUsuario(uid:string): Observable<Usuario[]> {
    let apiUrl = `${USERS_API_URL}/usuarios/${uid}`;
    return this.http.get<Usuario[]>(apiUrl).pipe(
      map(usrs => {
          usrs.map(usr => new Usuario(usr));
          return usrs;
        }
      )
    );
  }

  buscarPersonas(texto:string): Observable<Usuario[]> {
    const options = { params: new HttpParams()
              .set('q', texto ? texto : 'algoquenoexiste')
              .set('warden', 'true')
          };
    let apiUrl = `${USERS_API_URL}/usuarios`;
    return this.http.get<Usuario[]>(apiUrl, options);
  }

}
