const int1 = [1, 3, 5, 7, 9];
const int2 = [0, 2, 4, 6, 8];
const vazio = [];
const int3 = [1, 2];
const int4 = [1];

function conferir(array){
    if(array.length >= 2){
        if(array.indexOf(1) == -1 && array.indexOf(3) == -1){
            return true;
        } else {
            return false
        }
    } else {
        return false;
    }
}

console.log(conferir(int1));
console.log(conferir(int2));
console.log(conferir(int3));
console.log(conferir(int4));
console.log(conferir(vazio));