var h1 = document.getElementById("titulo");
var p = document.getElementById("texto1");
console.log(h1.innerHTML);
h1.innerHTML = "Soy el nuevo documento";
h1.style.color = "blue";
h1.style.background = "red";

function cambiarColor() {
    p.style.color="olive"
}

var boton = document.getElementById("boton");
boton.onclick = function () {
    p.style.color="olive";
}

boton.addEventListener('click',function(){
    alert('me diste click')
});
boton.addEventListener('mouseover',function(){
    console.log('dectecte el raton')
});