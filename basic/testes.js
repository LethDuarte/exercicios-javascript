// var palavra = 'w3resource';
// //var palavraArray = palavra.reverse();
// var palavraArray =  palavra.split("");
// var reverso = palavraArray.reverse();

// console.log(reverso.join(""));


// for (i = 0; i<=palavraArray.length; i++){
//     var ultimo = palavraArray[palavraArray.length - 1];
// }


// var anoConv = 2017;
// var dia = new Date(anoConv,00,01);
// var final = dia.getDay();

//var num = 7;
// var numConv = 7;
// var meuNum = Math.floor(Math.random()*10 +1);

// if(numConv<0 || numConv>10){
//     console.log("Insira um número entre 0 e 10.");
// } else {
//     if (meuNum == numConv){
//         console.log("Bom trabalho");
//     } else {
//         console.log("Número não correspondido.");
//     }
// }

// var hoje = new Date();
// var anoAtual = hoje.getFullYear();
// var dataLimite = new Date(anoAtual, 11, 25);
// const umDia = 1000 * 60 *60 *24;

// if (hoje < dataLimite){
//     var faltam = (dataLimite - hoje)/umDia;
//     console.log(faltam.toFixed(0));
// } else {
//     dataLimite = new Date(anoAtual+1, 11, 25);
//     var faltam = (dataLimite - hoje)/umDia;
//     console.log(faltam.toFixed(0));
// }

// function converter(){
//     var celsius;
//     var fahr;

//     if (celsius && !fahr){
//         fahr = ((9 * celsius)/5)+32;
//         console.log(fahr.toFixed(1));
//     } else if (fahr && !celsius){
//         celsius = ((fahr -32)/9)*5;
//         console.log(celsius.toFixed(1));
//     } else {
//         console.log("Insira um valor.");
//     }
// }

// converter();

// function validar(){
//     //var inum = document.getElementById('inum');
//     var num = 9;
//     //var retorno;

//     if(num <= 13){
//         var dif = 13 - num;
//         console.log(dif);
//     } else {
//         var dobro = (num - 13) *2;
//         console.log(dobro);
//     }
// }
// validar();

// function verificar(){
//     var num1 = 10;
//     var num2 = 40;
    
//     if(num1 == 50 || num2 == 50 || num1+num2==50){
//         return true;
//     } else {
//         return false;
//     }
// }
// verificar();

// function tranf(){
//     var pal = "PYtohn";
//     var separe = pal.slice(0,2);

//     if(separe == "py" || separe == "Py" || separe == "PY"){
//         console.log(pal);
//     } else {
//         console.log("py" + pal);
//     }
// }

// tranf()

var pal = "javascript";
var prim = pal.substring(pal.length - 6, pal.length); 

console.log(prim);

// function conferir(num1, num2){
//     if(num1>=50 && num1<=99 || num2>=50 && num2<=99){
//         return true;
//     } else {
//         return false
//     } 
// }

// console.log(conferir(65, 45));