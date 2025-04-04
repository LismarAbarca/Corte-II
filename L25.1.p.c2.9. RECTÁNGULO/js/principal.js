import Cl_rectangulo from "./Cl_rectangulo.js";

let rectangulo1 = new Cl_rectangulo(4, 2);
let rectangulo2 = new Cl_rectangulo(3, 5);

let salida = document.getElementById("salida");
salida.innerHTML = 
`<br> Base del rectangulo: ${rectangulo1.base} 
<br> Altura: ${rectangulo1.altura}
<br> Area resultante ${rectangulo1.areaRectangulo()}
<br> Perimetro ${rectangulo1.perimetroRectangulo()}
<br>

<br> Base del rectangulo: ${rectangulo2.base}
<br> Altura: ${rectangulo2.altura}
<br> Area resultante ${rectangulo2.areaRectangulo()}
<br> Perimetro ${rectangulo2.perimetroRectangulo()}
`; 
