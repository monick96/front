const ARRAY_NUMEROS = [5,6,8,10,20,7,9,2];

let filtrarPares = (array)=>{

    let arrayNumerosFiltrados = [];

    array.forEach(num => {
        
        if(num%2 == 0){

            arrayNumerosFiltrados.push(num);

            console.log(`el num ${num} se agrego al array`);
            
        }
    });

    console.log(arrayNumerosFiltrados);
}

module.exports = {ARRAY_NUMEROS, filtrarPares};