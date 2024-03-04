var saludoId = document.getElementById('saludo');
console.log(saludoId.innerHTML);

// javascrip regular

// function saludar(nombre) {
//     return 'Hola '+ nombre;
// }

// funcion arrow
//variable = parametros => return
var saludar = nombre => 'hola '+ nombre;
saludoId.innerHTML = saludar('juanito');

var sumaId = document.getElementById('suma');
// var sumar = (num1,num2) => num1+num2;
var sumar = (num1,num2) => {
    var num3 =12;
    return num1+num2+num3;
};
// el simbolo + concatena en este caso
sumaId.innerHTML += sumar(10,15);
