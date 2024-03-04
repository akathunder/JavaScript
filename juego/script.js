 let numeroAzar = Math.floor(Math.random()*10)+1

 console.log(numeroAzar);

let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0


 function checkResult() {

     let entrada = parseInt(numeroEntrada.value)
    intentos++
    intento.textContent = 'Intentos: ' + intentos
     console.log(entrada);

    if (entrada < 1 || entrada > 10 || isNaN(entrada)) {
        mensaje.textContent = 'Ingresa un numero Valido'
        mensaje.style.color = 'black'
        return
    }
    
    if (entrada === numeroAzar) {
        mensaje.textContent = 'Excelente'
        mensaje.style.color = 'green'
        numeroEntrada.disabled = true
    }
    else if (entrada <= numeroAzar) {
        mensaje.textContent = 'Mas Alto'
        mensaje.style.color = 'red'
    }
    else if (entrada >= numeroAzar) {
        mensaje.textContent = 'Mas Bajo'
        mensaje.style.color = 'red'
    }else{
        mensaje.textContent = 'Vacio'
        return
    }
 }