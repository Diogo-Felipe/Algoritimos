class NoAVL{
    constructor(valor, esquerda, direita, alturaSAE, alturaSAD){
        this.valor = valor;
        this.esquerda = esquerda;
        this.direita = direita;
        this.alturaSAE = alturaSAE;
        this.alturaSAD = alturaSAD;
    }
}

class ArvoreAVL{
    constructor(){
        this.raiz = null;
    }

    add(valor, auxiliar = this.raiz){
        if(auxiliar == null)
            auxiliar = new NoAVL(valor, null, null, 0, 0);

        else if (valor < auxiliar.valor){

            auxiliar.esquerda = add(valor, auxiliar.esquerda);

            if(auxiliar.esquerda.alturaSAD > auxiliar.esquerda.alturaSAE)
                auxiliar.alturaSAE = auxiliar.esquerda.alturaSAD + 1;
            else{
                auxiliar.alturaSAE = auxiliar.esquerda.alturaSAE + 1;
            }

            auxiliar = this._balanceamento(auxiliar);
        } else {

            auxiliar.direita = add(valor, auxiliar.direita);

            if(auxiliar.direita.alturaSAD > auxiliar.direita.alturaSAE)
                auxiliar.alturaSAD = auxiliar.direita.alturaSAD + 1;
            else{
                auxiliar.alturaSAD = auxiliar.direita.alturaSAE + 1;
            }
            auxiliar = this._balanceamento(auxiliar);
        }

        return auxiliar;
    }

    _balanceamento(auxiliar){

        let fatorDeBalanceamento, fatorDeBalanceamentoDoFilho;

        fatorDeBalanceamento = auxiliar.alturaSAD - auxiliar.alturaSAE;

        if(fatorDeBalanceamento == 2){

            fatorDeBalanceamentoDoFilho = auxiliar.direita.alturaSAD = auxiliar.direita.alturaSAE;

            if(fatorDeBalanceamentoDoFilho >= 0)
                auxiliar = this._rotacaoEsquerda(auxiliar);
            else {
                auxiliar.direita = this._rotacaoDireita(auxiliar.direita);
                auxiliar = this._rotacaoEsquerda(auxiliar);
            }

        } else if (fatorDeBalanceamento == -2){

            fatorDeBalanceamentoDoFilho = auxiliar.esquerda.alturaSAD = auxiliar.esquerda.alturaSAE;

            if(fatorDeBalanceamentoDoFilho >= 0){
                auxiliar = this._rotacaoDireita(auxiliar);
            } else {
                auxiliar.esquerda = this._rotacaoEsquerda(auxiliar.esquerda);
                auxiliar = this._rotacaoDireita(auxiliar);
            }
        }

        return auxiliar;

    }

    _rotacaoEsquerda(auxiliar){
        let auxiliar1, auxiliar2;

        auxiliar1 = auxiliar.direita;
        auxiliar2 = auxiliar.esquerda;

        auxiliar.direita = auxiliar2;
        auxiliar1.esquerda = auxiliar;

        if(auxiliar.direita == null) {
			auxiliar.alturaSAD = 0;
		} else if(auxiliar.direita.alturaSAE > auxiliar.direita.alturaSAD) {
			auxiliar.alturaSAD = auxiliar.direita.alturaSAE + 1;
		} else {
			auxiliar.alturaSAD = auxiliar.direita.alturaSAD + 1;
		}
		
		if(auxiliar1.esquerda.alturaSAE > auxiliar1.esquerda.alturaSAD) {
			auxiliar1.alturaSAE = auxiliar1.esquerda.alturaSAE + 1;
		} else {
			auxiliar1.alturaSAE = auxiliar1.esquerda.alturaSAD + 1;
		}
		
		return auxiliar1;
    }

    _rotacaoDireita(auxiliar){
		let auxiliar1, auxiliar2;
		
		auxiliar1 = auxiliar.esquerda;
		auxiliar2 = auxiliar1.direita;
		
		auxiliar.esquerda = auxiliar2;
		auxiliar.direita = auxiliar;
		
		if(auxiliar.esquerda == null) {
			auxiliar.alturaSAE = 0;
		} else if(auxiliar.esquerda.alturaSAE > auxiliar.esquerda.alturaSAD) {
			auxiliar.alturaSAE = auxiliar.esquerda.alturaSAE + 1;
		} else {
			auxiliar.alturaSAE = auxiliar.esquerda.alturaSAD + 1;
		}
		
		if(auxiliar1.direita.alturaSAE > auxiliar.direita.alturaSAE) {
			auxiliar1.alturaSAD = auxiliar.direita.alturaSAE + 1;
		} else {
			auxiliar1.alturaSAD = auxiliar.direita.alturaSAD + 1;
		}
		
		return auxiliar1;
    }
}