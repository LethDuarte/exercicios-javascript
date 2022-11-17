//Escreva um programa JavaScript para encontrar o k-ésimo maior elemento de um determinado array de inteiros.
const nums = [1,2,6,4,5]
//var k;

function maiorNum(array){
    var p = 0;
    for(var i=0; i<array.length; i++){
        if(array[i]>p){
            p = array[i];
        }
    }

    console.log(p);
    console.log(array.indexOf(p));
}

//maiorNum(nums);

//codigo da resolução
function maiorNoArray(array, k){
    for(let i =0; i<k;i++){
        let max_index = i;
        const tmp = array[i];

        for(let j=i+1; j<array.length; j++){
            if(array[j]>array[max_index]){
                max_index = j;
            }
        }

        array[i] = array[max_index];
        array[max_index] = tmp;
    }

    return array[k-1];
}

console.log(maiorNoArray(nums,3));