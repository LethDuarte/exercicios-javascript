var int1 = [30, 40, 50];
var int2 = [60, 70, 60];

function compara(array){
    if(array[0] == array[array.length-1]){
        return true;
    } else {
        return false;
    }
}

console.log(compara(int1));
console.log(compara(int2));