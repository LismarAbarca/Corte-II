import Cl_profesor from "./Cl_profesor.js";

export default class Cl_fijo extends Cl_profesor {
    constructor (nombre, tipo) {
        super (nombre, tipo);
    }

    sueldo() {
        return 90;
    }

    sueldoTotal() {
        return this.sueldo() + this.bono();
    }
}