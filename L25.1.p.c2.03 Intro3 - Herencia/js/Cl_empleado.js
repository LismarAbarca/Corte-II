export default class Empleado {
    constructor (sueldoBase) {
        this.sueldoBase = sueldoBase;
    }

    calcularSueldo() {
        return this.sueldoBase;
    }

}