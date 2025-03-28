import Cl_becado from "./Cl_becado.js";

let becado1 = new Cl_becado ("mary", 132,8)
let becado2 = new Cl_becado ("Alirio", 315, 35)

let salida = document.getElementById ("salida")

salida.innerHTML =`
<br> Nombre estudiante: ${becado1.nombre}
<br> Acumulado de Notas: ${becado1.acNotas}
<br> Cantidad de materias ${becado1.cntMaterias}
<br> Nota Promedio: ${becado1.notaPromedio()}
<br> Recibe una beca de: ${becado1.becaMensual()}

<br> Nombre estudiante: ${becado2.nombre}
<br> Acumulado de Notas: ${becado2.acNotas}
<br> Cantidad de materias ${becado2.cntMaterias}
<br> Nota Promedio: ${becado2.notaPromedio()}
<br> ${becado2.nombre} ${becado2.becaMensual()}
`