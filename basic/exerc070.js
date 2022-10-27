var num1 = [3, 8, 0];
var num2 = [1, 4, 6, 7];

function girar(array){
    if(array.length == 3){
        return array.reverse();
    } else {
        return false;
    }
}

console.log(girar(num1));
console.log(girar(num2));
