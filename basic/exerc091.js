//Escreva um programa JavaScript para encontrar a soma máxima possível de alguns de seus k números consecutivos (números que seguem um ao outro em ordem) de uma determinada matriz de inteiros positivos.

const nums = [1,2,6,4,5];

//codigo da resolução
function somaConsecutiva(array, k){
    let result = 0;
    let temp_sum = 0;

    for(var i=0; i<k-1; i++){
        temp_sum += array[i];
    }

    for(var i = k-1; i< array.length; i++){
        temp_sum += array[i];

        if(temp_sum > result){
            result = temp_sum;
        }
        temp_sum -= array[i-k+1];
    }
    return result;
}

console.log(somaConsecutiva(nums, 2));