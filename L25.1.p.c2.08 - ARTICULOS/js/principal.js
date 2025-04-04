import Cl_juguete from "./Cl_juguete.js";

let juguete1 = new Cl_juguete ("carrito",2, 10,2);
let juguete2 = new Cl_juguete ("peluche",3, 20,1);

let salida = document.getElementById("salida")

salida.innerHTML = `
<br> Nombre del juguete: ${juguete1.nombre}
<br> Cantidad del juguete: ${juguete1.cantidad}
<br> Precio base: ${juguete1.precioBase}
<br> Edad recomendada: ${juguete1.edad}
<br> Precio a pagar del juguete: ${juguete1.aPagar()}
<br>
<br> Nombre del juguete: ${juguete2.nombre}
<br> Cantidad del juguete: ${juguete2.cantidad}
<br> Precio base: ${juguete2.precioBase}
<br> Edad recomendada: ${juguete2.edad}
<br> Precio a pagar del juguete: ${juguete2.aPagar()}`