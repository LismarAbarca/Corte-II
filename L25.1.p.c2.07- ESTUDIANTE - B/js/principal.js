import deportista from "./Cl_deportista.js";
let deportista1 = new deportista ("juan", 132, 8, 1, 21);
let deportista2 = new deportista ("Felix", 110, 10, 2, 20);


let salida = document.getElementById("salida");

salida.innerHTML = `
<br> Nombre del estudiante: ${deportista1.nombre} 
<br> Acumulado de notas: ${deportista1.acNotas}
<br> Cantidad de materias: ${deportista1.cntMaterias}
<br> Deporte: (beisbol=1, futbol=2) ${deportista1.deporte}
<br> Promedio de notas: ${deportista1.promedioNotas()} 
<br> ${deportista1.nombre} ${deportista1.admitido()}

<br> Nombre del estudiante: ${deportista2.nombre} 
<br> Acumulado de notas: ${deportista2.acNotas} 
<br> Cantidad de materias: ${deportista2.cntMaterias}   
<br> Deporte: (beisbol=1, futbol=2) ${deportista2.deporte}
<br> Promedio de notas: ${deportista2.promedioNotas()} 
<br> ${deportista2.nombre} ${deportista2.admitido()}
 `
