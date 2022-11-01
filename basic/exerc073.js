var int1 = [1, 3, 5];
var int2 = [0, 2, 4, 6];

function reverter(array){
    if(array.length == 3){
        return array.reverse();
    } else {
        return false;
    }
}

console.log(reverter(int1));
console.log(reverter(int2));