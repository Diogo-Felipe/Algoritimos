class NoPilha{
    constructor(valor, proximo){
        this.valor = valor;
        this.proximo = proximo;
    }
}

class Pilha{
    constructor(){
        this.topo = null;
    }

    add(valor){
        let novoNo = new NoPilha(valor, this.topo);

        this.topo = novoNo;
    }
}