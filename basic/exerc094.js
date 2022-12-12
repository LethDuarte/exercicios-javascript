

const nums = [1,2,3,2,1,8,9,8,8];

function maisRepete(array){
    var elemento; 

    for (var i = 0; i<array.length; i++){
        for(var k=1; k != i && k< array.length; k++){
            if(array[i] = array[k]){
                elemento = array[i];
            }
        }   
    }

    return elemento;
}

console.log(maisRepete(nums));