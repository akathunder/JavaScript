console.log('var, let y const');

// var edad = 30;
let edad = 55;

// console.log(edad)
let i = 50;
// let viviendo en otro scope
for(let i=0;i<4;i++){
// console.log('valor dentro del scope for '+i);
}
// console.log('valor fuera del scope for '+i);

//CONSTANT valor no modificable
const num1 = 35;
console.log(num1);

const numeros = [10,30,45];
numeros.push(10);
console.log(numeros);