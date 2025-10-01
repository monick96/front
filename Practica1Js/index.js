const {ARRAY_NUMEROS, filtrarPares, calcularPomedio, imprimirLento, operar} = require('./utils/practica1js');

filtrarPares(ARRAY_NUMEROS);

calcularPomedio(ARRAY_NUMEROS);

imprimirLento(ARRAY_NUMEROS);

let result = operar(5,6, (a,b)=> a + b);
let result2 = operar(2,3, (a,b)=> a * b)
console.log(`el resultado de la operacion 1 es: ${result}`);
console.log(`el resultado de la operacion 2 es: ${result2}`);
