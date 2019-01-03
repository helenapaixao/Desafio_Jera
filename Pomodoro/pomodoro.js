

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

        document.querySelector('#comecar').onclick = function(){
            self.startComecar.aply(self);
        };
        document.querySelector('#intervalo').onclick = function(){
            self.intervalo.aply(self);
        };

        document.querySelector('#parar').onclick = function(){
            self.parar.aply(self);
        };


    },

    deletarVariaveis : function(mins,sec,comecar){
        this.minutos = mins;
        this.segundos = sec;
        this.comecar = comecar;
        this.animacaoLargura = 200(this.minutos*60);
        this.animacaoAltura=0;
    },

    startComecar: function(){
        this.deletarVariaveis(25,0,true);
    },
    


}
