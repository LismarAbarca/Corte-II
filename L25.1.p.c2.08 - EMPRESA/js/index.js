import Cl_administrativo from "./Cl_administrativo.js";
import Cl_obrero from "./Cl_obrero.js";

let administrativo1 = new Cl_administrativo ("Luis",15, 1);
let obrero1 = new Cl_obrero ("Ana",20, 2);
let obrero2 = new Cl_obrero ("raul",17, 0);
let administrativo2= new Cl_administrativo ("Liz",19, 3);
let obrero3 = new Cl_obrero ("Eva",22, 5);


let salida = document.getElementById ("salida")

salida.innerHTML = `
Nombre: ${administrativo1.nombre} Edad: ${administrativo1.edad} Nivel:${administrativo1.nivel} 
Inceptivo: ${administrativo1.incentivo()} Sueldo: ${administrativo1.sueldo()}
<br> Nombre: ${obrero1.nombre} Edad: ${obrero1.edad} cantidad de hijos: ${obrero1.cntHijos} 
Bono: ${obrero1.bono()} Sueldo: ${obrero1.sueldoObrero()}
<br> Nombre: ${obrero2.nombre} Edad: ${obrero2.edad} cantidad de hijos: ${obrero2.cntHijos} 
Bono: ${obrero2.bono()} Sueldo: ${obrero2.sueldoObrero()}
<br> Nombre: ${administrativo2.nombre} Edad: ${administrativo2.edad} Nivel:${administrativo2.nivel} 
Inceptivo: ${administrativo2.incentivo()} Sueldo: ${administrativo2.sueldo()}
<br> Nombre: ${obrero3.nombre} Edad: ${obrero3.edad} cantidad de hijos: ${obrero3.cntHijos} 
Bono: ${obrero3.bono()} Sueldo: ${obrero3.sueldoObrero()}
`;





