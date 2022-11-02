var int1 = [1, 3, 5, 7, 9];
var int2 = [0, 2, 4, 6, 8, 10];
var vazio = [];

function conferir(array){
    if(array.length >= 2){
        var a = array.find(e => e == 1 || e == 3)
        if(a != null){
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
console.log(conferir(vazio));