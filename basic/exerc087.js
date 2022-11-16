const a1 = [10,20,30];
const a2 = [10,20,30];

function compara(a, b){
    return a.length === b.length && a.every((value, index)=> value === b[index]);
}

console.log(compara(a1,a2));