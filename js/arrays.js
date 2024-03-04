// arrays

console.log('Arrays');


// let array1 = document.getElementById('array1');
// let array2 = document.getElementById('array2');

let arrayLienal = ['Curso Html', 'Curso CSS', 'Curso JS']

//console.log(arrayLienal);

arrayLienal[arrayLienal.length] = 'React' // agrega elemto al array

//console.log(arrayLienal);

let arrayDeclarado = new Array(5);

arrayDeclarado[0] = 'Curso HTML'
arrayDeclarado[1] = 'Curso CSS'
arrayDeclarado[2] = 'Curso JS'
arrayDeclarado[3] = 'Curso React'

// console.log(arrayDeclarado[3]);

// array1.innerHTML = arrayDeclarado 
// array2.innerHTML = arrayDeclarado[2]

let longitud = arrayDeclarado.length // longitud del array
let ordenar = arrayDeclarado.sort()  // Ordena el Array de forma natural 1,10,11,12,2,3,4
let ordenar1 = arrayDeclarado.sort((x,y) => x-y)  // Ordena el Array en secuencia
let ultimo = arrayDeclarado.length-1 // Trae la ultima posicion de array

// console.log(arrayDeclarado.length);
// console.log(arrayDeclarado.sort());
// console.log(arrayDeclarado.length-1);
// console.log(ordenar1);


// Bucle
let texto = ''
for (let index = 0; index < arrayLienal.length; index++) {
    const element = arrayLienal[index];
    texto += "<li>" + element + "</li>"
}

//document.getElementById('lista').innerHTML = texto
// console.log(texto);

//----------------------------------------------------------------------------------------------------------
// Metodos Arrays 


// Filter Array
let arrayPlanetas = ['Mercurio','Venus','Tierra','Marte','Jupiter','Saturno','Urano','Neptuno','Pluton','Tierra']
console.log(arrayPlanetas.length);
console.log(arrayPlanetas);

let arrayPersonas =[
    {nombre: 'Hector', apellido: 'Marquez'},
    {nombre: 'Ximena', apellido: 'Rojas'},
    {nombre: 'Juan', apellido: 'Lopez'},
    {nombre: 'Pedro', apellido: 'Perez'},
    {nombre: 'Luis', apellido: 'Lopez'},
    {nombre: 'Paco', apellido: 'Perez'}
]
console.log(arrayPersonas.length);
console.log(arrayPersonas);


let arrayFilterPlanetas = arrayPlanetas.filter(x => x == 'Tierra')  //Funcion Flecha CallBack
// console.log(arrayFilterPlanetas);

let arrayFilterPersonas = arrayPersonas.filter(x => x.apellido == 'Lopez')
// console.log(arrayFilterPersonas);

//Map Array

let mapPlanetas = arrayPlanetas.map(x => {
    if (x == 'Tierra') {
        return 'luna'
    }
})

// console.log(mapPlanetas);

// find Array trae el primer objeto encontrado

let findArrayPlanetas = arrayPlanetas.find(x => x == 'Tierra')
let findArrayIndexPlanetas = arrayPlanetas.findIndex(x => x == 'Tierra')
let findObjetosPersonas = arrayPersonas.find(x => x.apellido == 'Lopez') 
let.log(findArrayIndexPlanetas);

//