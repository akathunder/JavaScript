// TIPOS DE VARIABLES

/*

Nombre	Descripción	Ejemplo
lowercase	Todo minúsculas. ❌ No se usa porque en palabras compuestas puede confundir.	precioproducto
UPPERCASE	Todo mayúsculas. ❌ No se usa porque en palabras compuestas puede confundir.	PRECIOPRODUCTO
camelCase	Primera palabra, todo minúsculas. El resto, todo minúsculas salvo primera letra.	precioProducto
PascalCase	Idem, pero las palabras empiezan con la primera letra mayúscula. Se usa en Clases.	PrecioProducto
snake_case	Las palabras se separan con un guión bajo y se escriben siempre en minúsculas.	precio_producto
UPPER_SNAKE_CASE	Se usa en constantes ajustables frecuentemente por el programador.	PRECIO_PRODUCTO
kebab-case	Palabras separadas con un guión normal y en minúsculas. Usadas en HTML/CSS.	precio-producto
dot.case	Palabras en minúsculas separadas por puntos. ❌ En Javascript no se puede usar.	precio.producto
Húngara	Prefijo (minúsculas) con el tipo de dato (n = número, t = texto, ...). ❌ Desaconsejada.	nPrecioProducto
*/

document.getElementById("text1").innerHTML = "Variables JS";

var variableVar = 'Variable "var" --Obsoleta';
document.getElementById("var1").innerHTML = variableVar;
// Declaracion sin Valor = SI
// Scope = funcion
// Reasignacion = SI
// Redeclaracion = SI

let variableLet = 'Varibla "let"';
document.getElementById("let1").innerHTML = variableLet;
// Declaracion sin Valor = SI
// Scope = bloque
// Reasignacion = SI
// Redeclaracion = NO
let x, y, z;
x = 5;
y = 7;
z = x + y;
document.getElementById("let2").innerHTML =
  x + "+" + y + "=" + z + "Operacion de tres variables let";

const variableConst = 'Variable "Const"';
document.getElementById("const1").innerHTML = variableConst;
// Declaracion sin Valor = NO
// Scope = blque
// Reasignacion = NO
// Redeclaracion = NO

function funcionConst() {
  const variableConstFuntion = "Const en funcion";
  document.getElementById("const2").innerHTML = variableConstFuntion;
}

// TIPOS DE VARIABLES
document.getElementById("text2").innerHTML = "Datos Number y String";

// Numeros
let variableNumero = 10; // Variable Numero
let varibleDecimal = 10.1; //Variable Flotante

document.getElementById(
  "dataval1"
).innerHTML = `Datos Number ${variableNumero} y Datos Float ${varibleDecimal}`;

// Texto
let variableTexto = "Variable texto String"; // Valor String
document.getElementById(
  "dataval2"
).innerHTML = `Datos String = ${variableTexto}`;

//

