import Cl_contratado from "./Cl_contratado.js";
import Cl_fijo from "./Cl_fijo.js";

let fijo = new Cl_fijo ("carolina",1 ); 
let contratado = new Cl_contratado("carlos", 2, 10);

let salida = document.getElementById ("salida")

salida.innerHTML = `
<br>Nombre: ${fijo.nombre} 
<br>Monto bono: ${fijo.bono()}
<br> Sueldo: ${fijo.sueldo()}
<br> Ingreso total ${fijo.sueldoTotal()}
<br> Nombre: ${contratado.nombre}
<br> Monto Bono: ${contratado.bono()}
<br> Sueldo: ${contratado.sueldoHoras()}
<br> Ingreso total: ${contratado.sueldoTotal()}
`;