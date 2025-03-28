import Cl_estudiante from "./Cl_estudiante.js";
export default class Cl_becado extends Cl_estudiante {
    constructor (nombre, acNotas, cntMaterias) {
        super (nombre, acNotas, cntMaterias)
    }


    becaMensual () {
        if (this.notaPromedio() > 15 )
            return 30;
        else
        if (this.notaPromedio() < 15 && this.notaPromedio()>10 )
            return 20;
        else
        if (this.notaPromedio() < 10)
            return "no le corresponde beca";
    }
}