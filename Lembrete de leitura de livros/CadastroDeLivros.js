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
        this.lerDados();
        if (this.validar()) {
            if (this.IdMarcado != null) {

                for (let i = 0; i < this.livros.length; i++) {

                    if (this.livros[i].id == this.IdMarcado) {
                        this.livros[i].nome == this.livro.nome;
                        this.livros[i].pagina == this.livro.pagina;
                        this.IdMarcado = null;
                    }
                }
            } else {

                this.livro.id = this.contador;
                this.livros.push(this.livro);
                this.contador++;
            }
            this.criarTabela();
        }
        this.limpar();
    }
    validar() {
        
        let mensagem = "";
        if (this.livro.nome == "") {
            mensagem += "O nome do livro deve ser preenchido."
        }
        if (this.livro.pagina == "") {
            mensagem += "A quantidade de paginas do livro devem ser preenchidas!!"
        }

        if (mensagem == "") {
            return true;
        }

        alert(mensagem + " ");
        return false;
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

    criarTabela() {


        }

    }

}

let biblioteca = new CadastroDeLivros();
