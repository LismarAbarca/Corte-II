import Cl_persona from "./Cl_persona.js";
export default class Cl_obrero extends Cl_persona {
    constructor (nombre, edad, cntHijos) {
        super (nombre, edad);
        this._cntHijos = cntHijos;
    }

    bono () {
        return this._cntHijos < 3 ? 50 : 70;
    }
    sueldoObrero () {
        return this.sueldoBase() + this.bono();
    }
}