export default class Cl_articulo{
    constructor(nombre, costo){
    this.nombre=nombre
    this.costo=costo
    }

    set nombre(nombre){
    this._nombre=nombre
    }   

    get nombre(){
    return this._nombre
    }

    set costo(costo){
    this._costo=costo
    }

    get costo(){
    return this._costo
    }

    porcentajeGanancia(){
    return 20 / 100
    }
    porcentajeDescuento(){
    return 0
    }
    precio(){
    return this.costo
    + this.costo * this.porcentajeGanancia()
    - this.costo * this.porcentajeDescuento()
    }
    }
    