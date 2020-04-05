class NoAVL{
    constructor(valor, esquerda, direita, alturaSAE, alturaSAD){
        this.setValor(valor);
        this.setDireita(esquerda);
        this.setDireita(direita);
        this.setAlturaSAE(alturaSAE);
        this.setAlturaSAD(alturaSAD);
    }

    setValor(valor){
        this.valor = valor;
    }

    setEsquerda(esquerda){
        this.esquerda = esquerda;
    }

    setDireita(direita){
        this.direita = direita;
    }

    setAlturaSAE(alturaSAE){
        this.alturaSAE = alturaSAE;
    }

    setAlturaSAD(alturaSAD){
        this.alturaSAD = alturaSAD;
    }
}