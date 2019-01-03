

var pomodoro ={


    comecar : false,
    minutos : 0 ,
    segundos: 0,
    animacaoAltura:0,
    animacaoLargura: 0,
    intervalo: null,
    minutosNoDom: null,
    segundosNoDom: null,
    animacaoDom: null,
    init: function(){

        var self = this;

        this.minutosNoDom= document.querySelector('#minutos');
        this.segundosNoDom = document.querySelector('#segundos');
        this.animacaoDom = document.querySelector('#animacaopreencher');

        this.intervalo = setInterval(function(){
            self.intervaloCallback.aply(self);
        }, 1000);

        document.querySelector('#')
    }

}
