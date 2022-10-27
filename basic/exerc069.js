var inteiros = [35, 48, 50];
var b = [11, 24, 56, 78];

function somarArray(array){
    if(array.length == 3){
        return array[0] + array[1] + array[2];
    } else {
        return false;
    }
}

console.log(somarArray(inteiros));
console.log(somarArray(b));
