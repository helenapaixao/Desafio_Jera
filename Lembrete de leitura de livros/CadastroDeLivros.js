class CadastroDeLivros {

    constructor() {

        this.livros = [];
         this.livro = {};
        this.contador = 0;
        this.IdMarcado = null;

    }

    lerDados() {
        
        let nome = document.getElementById("nome").value;
        let pagina = document.getElementById("pagina").value;

        this.livro = {};

        this.livro.nome = nome;
        this.livro.pagina = pagina;
        this.livro.lembrete = false;
    }
    salvar() {
     
    }
    validar() {
      
    }
    limpar() {

    }

    marcar(id) {

    }


    cadastrarLembrete(id) {


      
    }

    excluirLembrete(id) {


    }
    excluir(id) {
    }

    criarTabela() {


        }

    }

}

let biblioteca = new CadastroDeLivros();
