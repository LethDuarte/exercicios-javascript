//Escreva um programa JavaScript para calcular a soma das diferenças absolutas de números consecutivos de uma determinada matriz de inteiros.
const nums = [1,2,3,2,-5];


function somarDiferenca(array){
    var diferenca = [];
    var soma = 0;

    for(var i=0; i<array.length-1; i++){
        diferenca.push(Math.abs(array[i]-array[i+1]));
    }

    for(var i=0; i<diferenca.length; i++){
        
        soma += diferenca[i];
    }

    return soma;
}

console.log(somarDiferenca(nums));