//Escreva um programa JavaScript para substituir todos os números por um número especificado de uma determinada matriz de inteiros.

const nums = [1,2,3,2,2,8,1,9];

function substituir(array, velho, novo){
    for(var i=0; i < array.length; i++){
        if(array[i]===velho){
           array[i] = novo;
        }
    }

    return array;
}

console.log (substituir(nums, 2,5));