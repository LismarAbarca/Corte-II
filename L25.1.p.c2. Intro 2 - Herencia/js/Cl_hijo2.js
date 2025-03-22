export default class Cl_hijo2 extends Cl_padre {
    constructor(atribA,atrib2) {
        super(atribA);
        this.atrib2 = atrib2;
    }

    calculo () {
        return this.atribA + this.atrib2;
    }
}