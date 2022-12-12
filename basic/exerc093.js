//Escreva um programa JavaScript para encontrar a diferença máxima entre todos os pares possíveis de um determinado array de inteiros.
//'copiando a solução'

const nums = [1,2,3,8,9];

function maximaDiferenca(array){
    var maxResultado = 0; 

    for (var i = 0; i<array.length; i++){
        for(var k=0; k != i && k< array.length; k++){
            var dif = Math.abs(array[i] - array[k]);
            maxResultado = Math.max(maxResultado, dif);
        }   
    }

    return maxResultado;
}

console.log(maximaDiferenca(nums));