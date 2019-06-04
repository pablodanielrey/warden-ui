import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario, Mail } from '../entities/usuario'
import { Permiso } from '../entities/warden';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usuarios: Array<Usuario> = [];

  constructor() {
    this.setear_usuarios();    
  }

  private setear_usuarios(){
    this.usuarios = [
      new Usuario({
        id: 'd44e92c1-d277-4a45-81dc-a72a76f6ef8d',
        nombre: 'Ivan cesar',
        apellido: 'Castaneda',
        dni: '31073351',
        genero: 'Masculino',
        mails: [new Mail({email: 'ivan.castaneda@econo.unlp.edu.ar'})]   
      }),
      new Usuario({
        id: '89d88b81-fbc0-48fa-badb-d32854d3d93a',
        nombre: 'Pablo daniel',
        apellido: 'Rey',
        dni: '27294557',
        genero: 'Masculino',
        mails: [new Mail({email: 'pablo@econo.unlp.edu.ar'})]   
      }),
      new Usuario({
          id: '0cd70f16-aebb-4274-bc67-a57da88ab6c7',
          nombre: 'Emanuel Joaquin',
          apellido: 'Pais',
          dni: '31381082',
          genero: 'Masculino',
          mails: [new Mail({email: 'emanuel@econo.unlp.edu.ar'})]   
        }),
      new Usuario({
        id: '205de802-2a15-4652-8fde-f23c674a1246',
        nombre: 'Walter',
        apellido: 'Blanco',
        dni: '30001823',
        genero: 'Masculino',
        mails: [new Mail({email: 'walter.blanco@econo.unlp.edu.ar'})]   
      }),
      new Usuario({
        id: '13b2471b-507e-44d7-a440-efdb66d5aaa8',
        nombre: 'Leonardo',
        apellido: 'Consolini',
        dni: '34770038',
        genero: 'Masculino',
        mails: [new Mail({email: 'leonardo.consolini@econo.unlp.edu.ar'})]   
      }),
      new Usuario({
        id: '3ca3057b-adba-49b3-8b99-550311fc9c81',
        nombre: 'Miguel',
        apellido: 'Macagno',
        dni: '34928857',
        genero: 'Masculino',
        mails: [new Mail({email: 'miguel.macagno@econo.unlp.edu.ar'})]   
      }),
      new Usuario({
        id: '35f7a8a6-d844-4d6f-b60b-aab810610809',
        nombre: 'Alejandro agustin',
        apellido: 'Oporto',
        dni: '29694757',
        genero: 'Masculino',
        mails: [new Mail({email: 'alejandro@econo.unlp.edu.ar'})]   
      }),
      new Usuario({
        id: 'cd8fbf39-4ad2-4d11-b17b-3b070105f870',
        nombre: 'Maximiliano',
        apellido: 'Saucedo',
        dni: '27821597',
        genero: 'Masculino',
        mails: [new Mail({email: 'maxi.saucedo@econo.unlp.edu.ar'})]   
      })
    ]
  }  

  buscarPersonas(texto: string): Observable<any[]> {
    let personas2 = this.usuarios.filter( v => 
        v.nombre.toLowerCase().includes(texto.toLowerCase()) ||
        v.apellido.toLowerCase().includes(texto.toLowerCase()) ||
        v.dni.toLowerCase().includes(texto.toLocaleLowerCase())
      );
    return of(personas2);
  }
 
}
