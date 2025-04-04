import Cl_estudiante from "./Cl_estudiante.js";

export default class Cl_deportista extends Cl_estudiante {
    constructor (nombre, acNotas, cntMaterias , deporte, edad){
        super (nombre, acNotas, cntMaterias);
        this.deporte = deporte ;
        this.edad = edad;
    }

    admitido () {
        if (this.deporte === 1 && this.edad >= 21 && this.promedioNotas() > 14)
        return "Es admitido en beisbol"
        else if (this.deporte === 2 && this.edad >= 19 && this.promedioNotas()>12)
        return "Es admitido en futbol";
        else
        return "No es admitido";
    }

}