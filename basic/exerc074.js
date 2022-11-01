var int1 = [1, 3, 5];
var int2 = [0, 2, 4, 6];

function maior(array){
    if(array[0] > array[array.length-1]){
        for(var i=0; i<array.length; i++){
            array[i] == array[0];
        }
        return array;
    } if(array[0] < array[array.length-1]){
        for(var i=0; i<array.length; i++){
            array[i] == array[array.length -1];
        }
        return array;
    } else {
        return array;
    }
}

console.log(maior(int1));