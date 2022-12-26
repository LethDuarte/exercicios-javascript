//Escreva um programa JavaScript para encontrar o número que aparece mais em uma determinada matriz de inteiros.

const nums = [1,2,3,2,2,8,1,9];

function maisRepete(array){
    var ctr = [];
    var ans = 0; 

    for (var i = 0; i<10; i++){
        ctr.push(0); 
    }

    for(var i = 0; i<array.length; i++){
        ctr[array[i]-1]++;
        if(ctr[array[i]-1]>ctr[ans]){
            ans = array[i]-1;
        }
    }

    return ans+1;
}

console.log(maisRepete(nums));