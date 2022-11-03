//corrigido
const int1 = [30, 30,];
const int2 = [40, 40];

function conferir(array){
    let a = array[0];
    let b = array[1];

    return (a === 30 && b === 30) || (a === 40 && b === 40)
}

console.log(conferir(int2));
