export default class Cl_persona {
constructor (nombre, edad) {
    this._nombre = nombre;
    this._edad = edad;
}




esMayorDeEdad() {
    return this._edad >= 18;
}

sueldoBase () {
    return 150 ;
}
}