const int1 = [1, 3, 5, 7, 9];
const int2 = [0, 2, 4, 6, 8];
const vazio = [];
const int3 = [1, 2];
const int4 = [1];

function trocar(array){
    if(array.length >= 2){
        var a = array.shift();
        var b = array.pop();

        array.push(a);
        array.unshift(b);

        return array;
    } else {
        return false;
    }
}

console.log(trocar(int1));
console.log(trocar(int2));
console.log(trocar(int3));
console.log(trocar(int4));
console.log(trocar(vazio));