export default class Cl_hijo1 extends Cl_padre {
    constructor(atribA,atrib1) {
        super(atribA);
        this.atrib1 = atrib1;
    }

    calculo () {
          return this.atribA + this.atrib1;
    }
}