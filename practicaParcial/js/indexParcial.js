
let saludar = ()=>{
    //envia una node list con todos las etiquetas input del documento
    // aunque haya un elemento, selecciono el primero y obtengo el Valor
    //captura input
    let inputNombre = document.getElementsByTagName('input')[0].value;
    
    //captura elemento lo oculta 
    let pInstruccion = document.querySelector('#pDeInstruccion');
    pInstruccion.hidden = true;

    //escribe otro elemento -> etiqueta h3 con saludo
    //saludamos un poco tarde
    let h3Saludo = document.getElementById('etiquetaSaludo');

    h3Saludo.innerText = inputNombre !== "" ? `HOLA ${inputNombre}! como estas? 👋🏽` : `HOLA anonimo! como estas? 👋🏽`;

    setTimeout(() => {
        //volver a la anterior vista
        pInstruccion.hidden = false;
        
        h3Saludo.style.cssText = 'color:red;'
        h3Saludo.innerText = "ya salude...";

    }, 3000);

}

let obtenerTareas = ()=>{
    
    let arrayTareas = ['EStudiar Arrays', 'Correr 10 min', 'Tomar agua', 'Bañarse', 'Pensar la cena', 'Estudiar back'];

    let items = "";

    arrayTareas.forEach((el)=>{

        items += '<li>' + el + '</li>';

        document.getElementById('listaArray').innerHTML = items;
    })
    
}

