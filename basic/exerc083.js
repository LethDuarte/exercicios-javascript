//Escreva um JavaScript para encontrar a string mais longa de uma determinada matriz de strings.

const palavras = ['a', 'aa', 'aaa', 'aaaaa','aaaa'];

var tamanho = [];

for(var i=0; i<palavras.length; i++){
    tamanho.push(palavras[i].length);
}

var max = tamanho.indexOf(Math.max(...tamanho));

//console.log(tamanho);
console.log(palavras[max]);

