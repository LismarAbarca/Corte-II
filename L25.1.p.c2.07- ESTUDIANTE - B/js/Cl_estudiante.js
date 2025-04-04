export default class Cl_estudiante {
    constructor (nombre, acNotas, cntMaterias) {
        this.nombre = nombre;
        this.acNotas = acNotas;
        this.cntMaterias = cntMaterias;
    }

    promedioNotas () {
        return this.acNotas / this.cntMaterias;
    }


}