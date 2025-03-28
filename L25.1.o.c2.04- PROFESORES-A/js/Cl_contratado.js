import Cl_profesor from "./Cl_profesor.js";

export default class Cl_contratado extends Cl_profesor {
    constructor (nombre, tipo, cantidadHoras) {
        super (nombre, tipo) 
        this.cantidadHoras = cantidadHoras;
    }

    sueldoHoras() {
        return (this.cantidadHoras * 10);
    }

    sueldoTotal () {
        return this.sueldoHoras() + this.bono();
    }
}