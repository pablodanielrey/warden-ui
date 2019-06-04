import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { InicioComponent } from './modules/inicio/inicio.component';
import { SeleccionarUsuarioComponent } from './shared/components/seleccionar-usuario/seleccionar-usuario.component';
import { PermisosComponent } from './modules/permisos/permisos.component';
import { WardenService } from './shared/services/warden.service';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SeleccionarUsuarioComponent,
    PermisosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    CoreModule
  ],
  providers: [
    WardenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
