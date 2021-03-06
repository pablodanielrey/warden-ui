// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  loginApiUrl: 'https://api.econo.unlp.edu.ar/login/api/v1.0',
  //Prod
  //wardenApiUrl: 'https://api.econo.unlp.edu.ar/warden/api/v1.0',
  //Testing
  wardenApiUrl: 'http://163.10.56.5:10502/warden/api/v2.0',
  //wardenApiUrl: 'http://localhost:10502/warden/api/v2.0',
  oidp_issuer: 'https://oidc.econo.unlp.edu.ar/',
  usersApiUrl: 'https://api.econo.unlp.edu.ar/users/api/v2.0',

  client_id: 'warden-ui',
  version: '0.0.1a',

  loader: {
    cabecera: 'WARDEN | FCE',
    version: '0.0.1a',
    tituloSistema: 'WARDEN',
    subtituloSistema: 'Sistema de Control de Accesos a Sistemas de la FCE',
    desarrolloSistema: 'DiTeSI | Dirección de Tecnologías y Sistemas Informáticos',
    logoSistema: '/assets/img/fce/logofce2018.png',
  }  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
