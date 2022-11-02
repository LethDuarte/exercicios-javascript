var int1 = [1, 3, 5];
var int2 = [0, 2, 4];

function criar(a, b){
    if(a.length == 3 && b.length == 3){
        var novoArray = [];

        novoArray[0] = a[1];
        novoArray[1] = b[1];

        return novoArray;
    } else {
        return false;
    }
}

console.log(criar(int1, int2));