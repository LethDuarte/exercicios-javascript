//corrigida

var int1 = [1, 3, 5];
var int2 = [0, 2, 4];

function maior(array){
    var maxValor = array[0] > array[2] ? array[0] : array[2];

    array[0] = maxValor;
    array[1] = maxValor;
    array[2] =  maxValor;

    return array;
}

console.log(maior(int1));
console.log(maior(int2));