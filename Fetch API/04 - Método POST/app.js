// console.log('funcionando');

var formulario = document.getElementById('formulario'); //trae el elmento formulario
var respuesta = document.getElementById('respuesta'); // trae el id del div de la respuesta

formulario.addEventListener('submit', function(e){ //listener del evento submit boton
    e.preventDefault(); // evita que se ejecute por defecto
    console.log('me diste un click')

    var datos = new FormData(formulario); // trae todos los datos del formularios

    console.log(datos)
    console.log(datos.get('usuario'))
    console.log(datos.get('pass'))

    fetch('post.php',{ 
        method: 'POST',
        body: datos
    })
        .then( res => res.json()) // se recibe la promesa de respuesta
        .then( data => {
            console.log(data)
            if(data === 'error'){
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Llena todos los campos
                </div>
                `
            }else{
                respuesta.innerHTML = `
                <div class="alert alert-primary" role="alert">
                    ${data}
                </div>
                `
            }
        } )
})