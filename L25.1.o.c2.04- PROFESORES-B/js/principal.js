import Cl_contratado from "./Cl_contratado.js";


let contratado1 = new Cl_contratado ("Rafael",2,15 ); 
let contratado2 = new Cl_contratado("Felicia", 2, 20);

let salida = document.getElementById ("salida")

salida.innerHTML = `

<br> Nombre: ${contratado1.nombre}
<br> Monto Bono: ${contratado1.bono()}
<br> Cantidad Horas: ${contratado1.cantidadHoras}
<br> Ingreso total: ${contratado1.sueldoTotal()}
<br> Nombre: ${contratado2.nombre}
<br> Monto Bono: ${contratado2.bono()}
<br> Cantidad Horas: ${contratado2.cantidadHoras}
<br> Ingreso total: ${contratado2.sueldoTotal()}

`;