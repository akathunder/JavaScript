console.log('funcionando')

// comparaciones

var numero1=4
var texto1 ="texto"
var verdadero = true

    //comnparacion simple
if(numero1 ==5){
  //  console.log('es igual')
}
else if( numero1 >5){
  //  console.log('es mayor')
}
else{
  //  console.log('es menor')
}
    // comparacion compuesta
if (numero1 == 5 && texto1 == 'texto1'){
  //  console.log('son iguales')
}else{
  //  console.log('no son iguales')
}

if(numero1 == 5 || texto1 == 'texto1'){
   // console.log('alguno es igual')
}else{
   // console.log('ninguno es igual')
}
// comparacion boleana
if(verdadero){
  //  console.log('es verdadero')
}else{
  //  console.log('es falso')
}
if(!verdadero){
   // console.log('no es veradero')
}else{
  //  console.log('si es veradero')
}

//array
var arreglo1=[3,5,7,"hector"]
    //consultando el indice del arreglo
// console.log(arreglo1[0])
// console.log(arreglo1[1])
// console.log(arreglo1[2])
// console.log(arreglo1[3])
// consultando con el recorredor

// FOR
    // variable i inicia en cero, se repite hasta el ultimo indice vacio, incrementador
for(var i=0;i<4;i++){
    // console.log(arreglo1[i])
}
// WHILE
var i=0;
while(i<4){
    // console.log(arreglo1[i]);
    i++; // i=i+2 suma de dos en dos
}

// DO WHILE
do{
    // console.log(i);
    i++;
}while(i<4)

//SWITCH
var hora = 8;
switch(hora){
    case 10:
        // console.log('son las 10 am')
    break;
    case 15:
        // console.log('son las 3 pm')
    break;    
    default:
        // console.log('no tengo saludo a esa hora')
    break;
}

//FUNCIONES

// var num1=10;
// var num2=20;

//suma
// var result1= num1+num2;
// console.log(result)
function suma(num1,num2) {
    return console.log(num1+num2)    
}
suma(10,15);
