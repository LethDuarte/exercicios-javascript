//Escreva um programa JavaScript para exibir o dia e a hora atuais no seguinte formato.
// Sample Output : Today is : Tuesday.
// O horário atual é : 22h : 30 : 38

const dia = new Date();
var semana = ["domingo","segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
const diaSemana = dia.getDay(); //retorna um número.
const data = dia.toLocaleDateString();
const hora = dia.toLocaleTimeString();

//console.log(semana[diaSemana]);

console.log(`Hoje é ${semana[diaSemana]}, dia ${data}.`);
console.log(`O horário atual é ${hora}.`);

