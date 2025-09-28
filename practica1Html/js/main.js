function cambiarEstiloBotorIrArriba(){
    //capturar elemento a travez del DOM
    const ELEMENTO_BOTON = document.getElementById('botonIrArriba');
    //o
    //const ELEMENTO_BOTON = document.querySelector('#botonIrArriba');
    
    //aplicar estilos
    ELEMENTO_BOTON.style.fontFamily = '"Bitcount Prop Single Ink"';
    ELEMENTO_BOTON.style.backgroundColor =  '#160e12';
    ELEMENTO_BOTON.style.width = '100px';
}