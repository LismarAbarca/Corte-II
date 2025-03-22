import Cl_viveres from "./Cl_viveres.js";
import Cl_ropa from "./Cl_ropa.js";

let viveres1 = new Cl_viveres("leche", 10, true);
let ropa1 = new Cl_ropa("camisa", 20, 2);
let ropa2 = new Cl_ropa("short", 20, 3);
let viveres2 = new Cl_viveres("toddy", 30, false);
let ropa3 = new Cl_ropa("blusa", 40, 3);

let salida = document.getElementById("salida")

salida.innerHTML = `
Nombre: ${viveres1.nombre} <br>
Costo: ${viveres1.costo} <br>
Precio: ${viveres1.precio()} <br>
Total: ${viveres1.totalViveres()} <br>
<br>
Nombre: ${ropa1.nombre} <br>
Costo: ${ropa1.costo} <br>
Precio: ${ropa1.precio()} <br>
Total: ${ropa1.totalRopa()} <br>
<br>
Nombre: ${ropa2.nombre} <br>
Costo: ${ropa2.costo} <br>
Precio: ${ropa2.precio()} <br>
Total: ${ropa2.totalRopa()} <br>
<br>
Nombre: ${viveres2.nombre} <br>
Costo: ${viveres2.costo} <br>
Precio: ${viveres2.precio()} <br>
Total: ${viveres2.totalViveres()} <br>
<br>
Nombre: ${ropa3.nombre} <br>
Costo: ${ropa3.costo} <br>
Precio: ${ropa3.precio()} <br>
Total: ${ropa3.totalRopa()} <br>
`