class NoDeque{
    constructor(valor, anterior, proximo){
        this.valor = valor;
        this.anterior = anterior;
        this.proximo = proximo;
    }
}

class Deque{
    constructor(){
        this.inicio = null;
        this.fim = null;
    }

    addInicio(valor){
        let novoNo = new NoDeque(valor, null, this.inicio);

        if(this.inicio == null){
            this.fim = novoNo;
        } 
        
        this.inicio = novoNO;
    }

    addFim(valor){
        let novoNo = new NoDeque(valor, this.fim, null);

        if(this.inicio == null){
            this.inicio = novoNo;
        } 
        this.fim = novoNo;
    }

    removeInicio(){
        this.inicio = this.inicio.proximo;
    }

    removeFim(){
        this.fim = this.fim.anterior;
    }

    lerDoInicio(){
        let noAtual = this.inicio;

        console.log("Lendo Deque do Inicio");
        while(noAtual != null){
            console.log(noAtual.valor);
            noAtual = noAtual.proximo;
        }
    }

    lerDoFim(){
        let noAtual = this.fim;

        console.log("Lendo Deque do Fim");
        while(noAtual != null){
            console.log(noAtual.anterior);
            noAtual = noAtual.anterior;
        }
    }
}