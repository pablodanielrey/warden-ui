import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  buscarPersonas(termino):Observable<any[]> {
    let obs$:Observable<any[]> = of(
      [
        {
          id: '35f7a8a6-d844-4d6f-b60b-aab810610809',
          nombre: 'Alejandro agustin',
          apellido: 'Oporto',
          dni: '29694757',
          genero: 'Masculino',
          mails: [{email: 'alejandro@econo.unlp.edu.ar'}]   
        },
        {
          id: '35f7a8a6-d844-4d6f-b60b-aab810610809',
          nombre: 'Alejandro agustin',
          apellido: 'Oporto',
          dni: '29694757',
          genero: 'Masculino',
          mails: [{email: 'alejandro@econo.unlp.edu.ar'}]   
        },
        {
          id: '35f7a8a6-d844-4d6f-b60b-aab810610809',
          nombre: 'Alejandro agustin',
          apellido: 'Oporto',
          dni: '29694757',
          genero: 'Masculino',
          mails: [{email: 'alejandro@econo.unlp.edu.ar'}]   
        }                
      ]
    );
    return obs$;
  }
}
