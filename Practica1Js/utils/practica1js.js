const ARRAY_NUMEROS = [5,6,8,10,20,7,9,2];

let filtrarPares = (array)=>{

    let arrayNumerosFiltrados = [];
    
    array.forEach(num => {

        if(num % 2 == 0){

            arrayNumerosFiltrados.push(num);

            console.log(`el num ${num} se agrego al array`);
            
        }
    });

    console.log(arrayNumerosFiltrados);
}

let calcularPomedio = (array) => {
    let suma = 0; 
    let longitud = array.length;

    array.forEach(num=> {
        suma += num;
    });

    console.log(`El promedio es: ${suma/longitud}`)
}

let imprimirLento = (array)=>{
    setTimeout(() => {

        console.log('Imprimiendo array....');

        array.forEach(num => {
            console.log(num);
        });

        console.log('Finalizando impresion array....');
        
    }, 1000);
}

/**Operación con Callback
Crear una función que reciba un callback y dos números, aplique el callback y
devuelva el resultado. Implementar al menos dos callbacks diferentes. */
let operar = (a, b, callback)=>{

    return callback(a,b);

} 


module.exports = {ARRAY_NUMEROS, filtrarPares, calcularPomedio, imprimirLento, operar};