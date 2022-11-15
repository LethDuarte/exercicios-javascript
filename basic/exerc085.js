//Escreva um código JavaScript para dividir um determinado array de inteiros positivos em duas partes. O primeiro elemento vai para a primeira parte, o segundo elemento vai para a segunda parte e o terceiro elemento vai para a primeira parte e assim por diante. Agora calcule a soma de duas partes e armazene em uma matriz de tamanho dois.

const num = [1,2,3,4,5,6,7,8,9,10];
const play = [1,3,6,2,5,10];

function dividir(array){
    var num1 = [];
    var num2 = [];

    var soma1 = 0;
    var soma2 = 0;

    for(var i = 0; i< array.length; i++){
        if(array[i]%2 != 0){  
            num1.push(array[i]);
        } else {
            num2.push(array[i]);
        }
    }

    for(var j = 0; j<num1.length; j++){
        soma1 += num1[j];
    }

    for(var l = 0; l<num2.length; l++){
        soma2 += num2[l];
    }

console.log(num1);
console.log(num2);
console.log(soma1+soma2);
}

//dividir(num);
dividir(play);