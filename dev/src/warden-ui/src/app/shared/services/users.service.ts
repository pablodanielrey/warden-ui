import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../entities/usuario'
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
