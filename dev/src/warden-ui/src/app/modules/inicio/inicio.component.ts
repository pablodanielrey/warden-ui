import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment'
import { ActivatedRoute, Router } from '@angular/router';
import { NavegarService } from 'src/app/core/navegar.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  tituloSistema: string;
  subtituloSistema: string;
  desarrolloSistema: string;
  logoSistema: string

  constructor(private route: ActivatedRoute, 
              private navegarService: NavegarService,
              private router: Router) {
                this.tituloSistema = environment.loader.tituloSistema;
                this.subtituloSistema = environment.loader.subtituloSistema;
                this.desarrolloSistema = environment.loader.desarrolloSistema;
                this.logoSistema = environment.loader.logoSistema
  }

  ngOnInit() {
  }

  subscriptions: any[] = [];

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }  

  recargar() {
    this.subscriptions.push(
      this.navegarService.navegar({url: '/sistema/error', params: {'error': 'mensaje de error por parametro'}})
      .subscribe()
    )
  }

  volver() {    
  }

 
}
