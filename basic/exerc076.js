var int1 = [1, 3, 5, 7, 9];
var int2 = [0, 2, 4, 6, 8, 10];
var vazio = [];

function criarArray(array){
    if(array.length >= 1){
        var novoArray = [];

        novoArray.push(array[0], array[array.length-1]);

        return novoArray;
    } else {
        return false;
    }
}

console.log(criarArray(int1));
console.log(criarArray(int2));
console.log(criarArray(vazio));