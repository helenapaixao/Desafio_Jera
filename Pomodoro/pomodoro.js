class Pomodoro{

    constructor(){

        this.comecar = false;
        this.minutos= 0;
        this.segundos=0;
        this.preenchimentoAltura = 0;
        this.preenchimentoLargura=0;
        
        this.minutosNoDom= null;
        this.segundosNoDom = null;
        this.preenchimentoDom = null;
        this.intervalo = null;


    }

    iniciar(){

        this.minutosNoDom = document.getElementById("minutos").value;
        this.segundosNoDom = document.getElementById("segundos").value;
        this.preenchimentoDom = document.getElementById("animacaopreencher").value;

        
    }

        intervalor(){
            this.intervalo

        }

}
