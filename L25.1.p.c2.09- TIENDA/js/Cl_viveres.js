
import Cl_articulo from "./Cl_articulo.js"
export default class Cl_viveres extends Cl_articulo{
    constructor(nombre, costo, basico){
    super(nombre, costo);
    this.basico=basico;
    }

    set basico(basico){
        this._basico=basico;}

    get basico(){
        return this._basico;}

    porcentajeGanancia(){
    if (this.basico === true)
    return 0.5
    else return super.porcentajeGanancia();
    }
    
    totalViveres(){
        this.precio() + this.porcentajeGanancia();
    }

}
