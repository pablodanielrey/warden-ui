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
          id: 'd44e92c1-d277-4a45-81dc-a72a76f6ef8d',
          nombre: 'Ivan cesar',
          apellido: 'Castaneda',
          dni: '31073351',
          genero: 'Masculino',
          mails: [{email: 'ivan.castaneda@econo.unlp.edu.ar'}]   
        },
        {
          id: '89d88b81-fbc0-48fa-badb-d32854d3d93a',
          nombre: 'Pablo daniel',
          apellido: 'Rey',
          dni: '27294557',
          genero: 'Masculino',
          mails: [{email: 'pablo@econo.unlp.edu.ar'}]   
        },
        {
          id: '0cd70f16-aebb-4274-bc67-a57da88ab6c7',
          nombre: 'Emanuel Joaquin',
          apellido: 'Pais',
          dni: '31381082',
          genero: 'Masculino',
          mails: [{email: 'emanuel@econo.unlp.edu.ar'}]   
        },
        {
          id: '205de802-2a15-4652-8fde-f23c674a1246',
          nombre: 'Walter',
          apellido: 'Blanco',
          dni: '30001823',
          genero: 'Masculino',
          mails: [{email: 'walter.blanco@econo.unlp.edu.ar'}]   
        },
        {
          id: '13b2471b-507e-44d7-a440-efdb66d5aaa8',
          nombre: 'Leonardo',
          apellido: 'Consolini',
          dni: '34770038',
          genero: 'Masculino',
          mails: [{email: 'leonardo.consolini@econo.unlp.edu.ar'}]   
        },
        {
          id: '3ca3057b-adba-49b3-8b99-550311fc9c81',
          nombre: 'Miguel',
          apellido: 'Macagno',
          dni: '34928857',
          genero: 'Masculino',
          mails: [{email: 'miguel.macagno@econo.unlp.edu.ar'}]   
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
          id: 'cd8fbf39-4ad2-4d11-b17b-3b070105f870',
          nombre: 'Maximiliano',
          apellido: 'Saucedo',
          dni: '27821597',
          genero: 'Masculino',
          mails: [{email: 'maxi.saucedo@econo.unlp.edu.ar'}]   
        }
      ]
    );
    return obs$;
  }
}
