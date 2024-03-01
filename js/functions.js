// FUNCTIONS

let a = 5
let b = 9

function suma(x, y) {  // funcion que realiza una zuma se requiere un nombre de funcion y en este caso parametros
    return x + y
}

let respuesta = suma(a,b)

console.log(respuesta);

// -----------------------------------------------

let tempFar = 75

function farToCelcius(temp) {
    return (5/9) * (temp - 32)
}

const result = farToCelcius(tempFar)
console.log(`Resultado de convertir Farenheith a celcius: `, parseInt(result) );


// Arrow Funtion