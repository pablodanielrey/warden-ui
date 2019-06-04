export class Permiso {
    nombre: string = null;
    permiso: string = null;
    habilitado: boolean = false;

    constructor(n:string, p:string) {
        this.nombre = n;
        this.permiso = p;
    } 
}