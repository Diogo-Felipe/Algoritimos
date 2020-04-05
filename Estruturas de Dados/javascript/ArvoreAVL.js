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

    add(valor){
        this.raiz = this._insere(valor, this.raiz);
    }

    _insere(valor, auxiliar){
        if(auxiliar == null)
            auxiliar = new NoAVL(valor, null, null, 0, 0);

        else if (valor < auxiliar.valor){

            auxiliar.esquerda = this._insere(valor, auxiliar.esquerda);

            if(auxiliar.esquerda.alturaSAD > auxiliar.esquerda.alturaSAE)
                auxiliar.alturaSAE = auxiliar.esquerda.alturaSAD + 1;
            else{
                auxiliar.alturaSAE = auxiliar.esquerda.alturaSAE + 1;
            }

            auxiliar = this._balanceamento(auxiliar);
        } else {

            auxiliar.direita = this._insere(valor, auxiliar.direita);

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

    remove(valor){
        let auxiliar = this.raiz
        let encontrado = false;

        if(valor != this.raiz.valor){
            let anterior = this.raiz;

            while(auxiliar != null && !encontrado){
                if(valor == auxiliar.valor){
                    encontrado = true;
                } else if(valor < auxiliar.valor){
                    anterior = auxiliar;
                    auxiliar = auxiliar.esquerda;
                } else {
                    anterior = auxiliar;
                    auxiliar = auxiliar.direita;
                }
            }

            if(auxiliar == null){
                console.log("Elemento não existe");
                return;
            }

            if(auxiliar.direita == null && auxiliar.esquerda == null){
                if(anterior.esquerda == auxiliar) anterior.esquerda = null;
                else anterior.direita = null;
                
            } else if(auxiliar.direita != null && auxiliar.esquerda == null){
                if(anterior.esquerda == auxiliar) anterior.esquerda = auxiliar.direita;
                else anterior.direita = auxiliar.direita;

            } else if(auxiliar.direita == null && auxiliar.esquerda != null){
                if(anterior.esquerda == auxiliar) anterior.esquerda = auxiliar.esquerda;
                else anterior.direita = auxiliar.esquerda;

            } else {
                let noDireitaElementoEscluido = auxiliar.direita;
                let noEsquerdaElementoEscluido = auxiliar.esquerda;
                let anteriorDoAuxiliar;

                if(auxiliar == anterior.direita){
                    auxiliar = auxiliar.esquerda;
                    while(auxiliar.direita != null){
                        anteriorDoAuxiliar = auxiliar;
                        auxiliar = auxiliar.direita;
                    }
                    anterior.direita = auxiliar;

                } else {
                    auxiliar = auxiliar.esquerda;
                    while(auxiliar.direita != null){
                        anteriorDoAuxiliar = auxiliar;
                        auxiliar = auxiliar.direita;
                    }
                    anterior.esquerda = auxiliar;

                }

                auxiliar.direita = noDireitaElementoEscluido;
                auxiliar.esquerda = noEsquerdaElementoEscluido;
                anteriorDoAuxiliar.direita = null;
            }

        } else {
            if(auxiliar.direita == null && auxiliar.esquerda == null) {
                this.raiz = null;
            } else {
                if (auxiliar.esquerda != null && auxiliar.direita == null) 
                    this.raiz = auxiliar.esquerda;
                else if (auxiliar.esquerda == null && auxiliar.direita != null)
                    this.raiz = auxiliar.direita;
                else if (auxiliar.esquerda != null && auxiliar.direita != null) {
                    let noDireitaElementoEscluido = this.raiz.direita;
                    let noEsquerdaElementoEscluido = this.raiz.esquerda;
                    let anteriorDoAuxiliar;
                        
                    auxiliar = this.raiz.esquerda;
                    while(auxiliar.direita != null) {	
                        anteriorDoAuxiliar = auxiliar;
                        auxiliar = auxiliar.direita;
                    }
                    this.raiz = auxiliar;
                        
                    auxiliar.direita = noDireitaElementoEscluido;
                    auxiliar.esquerda = noEsquerdaElementoEscluido;
                    anteriorDoAuxiliar.direita = null;
                }
            }

        }

        this.raiz = this._atualiza(this.raiz);
    }

    _atualiza(auxiliar){

		if(auxiliar != null){

			auxiliar.esquerda = this._atualiza(auxiliar.esquerda);

			if(auxiliar.esquerda == null)
				auxiliar.alturaSAE = 0;
			else if(auxiliar.esquerda.alturaSAE > auxiliar.esquerda.alturaSAD)
				auxiliar.alturaSAE = auxiliar.esquerda.alturaSAE + 1;
			else
				auxiliar.alturaSAE = auxiliar.esquerda.alturaSAD + 1;

			auxiliar.direita = this._atualiza(auxiliar.direita);

			if(auxiliar.direita == null)
				auxiliar.alturaSAD = 0;
			else if(auxiliar.direita.alturaSAE > auxiliar.direita.alturaSAD)
				auxiliar.alturaSAD = auxiliar.direita.alturaSAE + 1;
			else
				auxiliar.alturaSAD = auxiliar.direita.alturaSAD + 1;

			auxiliar = this._balanceamento(auxiliar);			
		}		
		return auxiliar;
	}

    consulta(valor, auxiliar = this.raiz, achou = false) {
		
		if(auxiliar != null && !achou) {
			if(auxiliar.valor == valor) {
				achou = true;
			} else if(auxiliar.valor > valor) {
                console.log("Esquerda");
				achou = this.consulta(valor, auxiliar.esquerda, achou);
			} else {
                console.log("Direira");
				achou = this.consulta(valor, auxiliar.direita, achou);
			}
		}
		
		return achou;
    }
    
    mostrarEmPreOrdem(auxiliar = this.raiz) {
		
		console.log(auxiliar.valor)
		mostrarEmPreOrdem(auxiliar.esquerda);
		mostrarEmPreOrdem(auxiliar.direita);
		
	}
	
	mostrarEmOrdem(auxiliar = this.raiz) {
		
		mostrarEmOrdem(auxiliar.esquerda);
		console.log(auxiliar.valor)
		mostrarEmOrdem(auxiliar.direita);
		
	}
	
	mostrarEmPosOrdem(auxiliar = this.raiz) {
		
		mostrarEmPosOrdem(auxiliar.esquerda);
		mostrarEmPosOrdem(auxiliar.direita);
		console.log(auxiliar.valor)
		
	}
}