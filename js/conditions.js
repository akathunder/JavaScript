let edadPersona = 15;
let mensaje = "";

if (edadPersona >= 18 && edadPersona <= 60) {
  mensaje = "Es mayor de edad";
} else if (edadPersona >= 60) {
  mensaje = "Es edad avanzada";
} else {
  mensaje = "Es menor de edad";
}

// console.log(mensaje);

let estiloDeMusica = "Country";
let estiloSelec = "";
switch (estiloDeMusica) {
  case "Rock":
    estiloSelec = "Seleccionaste Rock";
    break;
  case "Pop":
    estiloSelec = "Seleccionaste Pop";
    break;
  case "Balada":
    estiloSelec = "Seleccionaste Balada";
    break;
  case "Country":
    estiloSelec = "Seleccionaste Country";
    break;
  default:
    estiloSelec = "No seleccionaste nada";
    break;
}
// console.log(estiloSelec);

let pasaporte = true
let edadPerson = 18
let nacionalidad = 'mexicana'

if (pasaporte) {
    console.log('Pasaporte si');
    if (edadPerson >= 18) {
        console.log('Es mayor de edad');
        if (nacionalidad == 'mexicana') {
            console.log('es mexicano');
        } else {
            console.log('debe ser mexicano');
        }
    } else {
        console.log('debe ser mayor de edad');
    }
} else {
    console.log('debe tener pasaporte');
}