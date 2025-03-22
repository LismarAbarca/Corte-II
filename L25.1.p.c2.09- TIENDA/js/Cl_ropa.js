import Cl_articulo from "./Cl_articulo.js";
export default class Cl_ropa extends Cl_articulo{
    constructor(nombre, costo, color){
    super(nombre, costo)
    this.color=color;
    }

    set color(color){
    this._color=color;
    }
    get color(){
    return this._color;
    }

    porcentajeDescuentorRopa(){
    return this.color===3 ? 10 : 0
    }

    totalRopa(){
        this.costo + this.porcentajeDescuentorRopa();
    }
}