// STRINGS

let stringa = 'texto string' // Valor String (texto)
console.log(stringa)

// NUMBERS

let numbera = 3 // Valor Numerico
console.log(numbera)
let numberb = 3.4 // Valor Numerico Flotante
console.log(numberb)

// BOOLEANS

let boleana = true
console.log(boleana)
let boleanb = false
console.log(boleanb)

// UNDEFINED

let undef // no se le asigno Valor
console.log(undef)

// NULL

let nully = null // su valor es nulo
console.log(nully)

// OBJECTS

let person = {
    firstName: "Jack",
    lastName: "Smith",
    age: 19,
    employed: true
} // se componene de el nombre de variable mas entre corchetes (clave : valor)



console.log(person.firstName); // se extrae el valor utilizando el nombre de la variable mas punto y seguido de la clave
console.log(person.lastName);
console.log(person.age);
console.log(person.employed);


// ARRAYS

let arrayConNumeros = [1, 2, 3, 4, 5, 6]
console.log(arrayConNumeros)

let arrayConStrings = ['Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco', 'Seis']
console.log(arrayConStrings)

// DATE

const date1 = new Date('01/02/2024')
console.log(date1)


//PARSEO

let parse1 = 5
let parse2 = '5'

let parseSuma = parse1 + parseInt(parse2)
console.log(parseSuma)

let parse3 = 5.3
let parse4 = '5.4'

let parseSuma2 = parse3 + parseFloat(parse4)
console.log(parseSuma2)

