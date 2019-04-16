function selectionSort(vetorDesordenado, inicio, fim) {
	for (let i = inicio; i < fim - 1; i++) {

		let menorPosicao = buscaPosicaoMenor(vetorDesordenado, i, fim);
		let atual = vetorDesordenado[i];
		let menor = vetorDesordenado[menorPosicao];

		vetorDesordenado[menorPosicao] = atual;
		vetorDesordenado[i] = menor;
	
	}

	return vetorDesordenado;
}

function buscaPosicaoMenor(vetorDesordenado, inicio, termino){
	let posicaoMenor = inicio;
	let menor = vetorDesordenado[inicio]

	for (let i = inicio; i < termino; i++) {
		if(vetorDesordenado[i] < menor){
			menor = vetorDesordenado[i];
			posicaoMenor = i;
		}
	}
	return posicaoMenor;
}

var vetorDesordenado  = [54,42,11,33,24,99,77,80];
vetorOrdenadoViaSelectionSort = selectionSort(vetorDesordenado, 0, vetorDesordenado.length);