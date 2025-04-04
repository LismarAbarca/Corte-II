import Cl_articulo from "./Cl_articulo.js";

export default class Cl_juguete extends Cl_articulo{
    constructor(nombre, cantidad, precioBase, edad ){ 
        super(nombre, cantidad, precioBase)
        this.edad = edad;
    }

    descuento () {
        if (this.edad === 1) 
            return this.precioArticulo() * 0.1;
        else 
        return 0;


        }
    

    aPagar () {
        return this.precioArticulo() - this.descuento()
    }
}