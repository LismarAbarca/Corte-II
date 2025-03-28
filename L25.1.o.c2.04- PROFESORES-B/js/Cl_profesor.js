export default class Cl_profesor {
    constructor (nombre,tipo) {
        this.nombre =  nombre;
        this.tipo = tipo;
    }

    tipo () {
        if (this.tipo === 1)
            return "profesor fijo";
        else
            return "profesor contratado";
    }

    bono() {
        return 30;
    }
}