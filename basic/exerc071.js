var int1 = [1, 3, 5, 7, 9];
var int2 = [0, 2, 4, 6, 8];
var int3 = [1];
var int4 = [];
var int5 = [0, 1];

function primeiro(array){
    if(array.length >= 1){
        if(array[0] == 1 || array[array.length-1] == 1){
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
    
}

console.log(primeiro(int1));
console.log(primeiro(int2));
console.log(primeiro(int3));
console.log(primeiro(int4));
console.log(primeiro(int5));