import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-juego',
  imports: [FormsModule],
  templateUrl: './juego.html',
  styleUrl: './juego.css',
})
export class Juego {
  msg = "suerteee!";
  inputNumber = 0;
  numeroMagico = this.generarNumeroRandom();
  gano = false;
  jugando = false;
  error = true;

  jugar(){
    console.log("NUMERo a ADIVINAR: " + this.numeroMagico);
    console.log("NUMERo a RECIBIDO: " + this.inputNumber);
    this.jugando = true;
    
    if (!this.validarRangoNumero()){
      this.msg = "Numero invalido";
      //this.error = true;
      return;
    }
    
    if (this.numeroMagico < this.inputNumber){
      this.msg = "uhh, el numero es menor a " + this.inputNumber;
      
    }else if (this.numeroMagico > this.inputNumber ) {
      this.msg = "uhh, el numero a adivinar es mayor a " + this.inputNumber;
      
    }else{
      this.msg = "Si! el numero era " + this.inputNumber;
      this.gano = true;
      this.error = false;
    }
  }

  reiniciarJuego(){
    this.inputNumber = 0;
    this.gano = false;
    this.msg = "suerteee!";
    this.jugando = false;
    this.error = true;
  }

  validarRangoNumero(){
    let esValido = true;

    if(this.inputNumber > 100 || this.inputNumber < 1){
     

      esValido = false;
    }

    return esValido;
  }

  generarNumeroRandom(){
    return Math.floor(Math.random() * 100 + 1);
  }

}
