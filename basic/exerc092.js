//Escreva um programa JavaScript para encontrar a diferença máxima entre quaisquer dois elementos adjacentes de uma determinada matriz de inteiros.

const nums = [1,2,3,8,9];

function maiorDiferenca(array){
    var dif = [];
    
    for(var i =0; i<array.length-1; i++){

        dif.push(Math.abs(array[i] - array[i+1]));  
    }

    return Math.max(...dif);
}

console.log(maiorDiferenca(nums));