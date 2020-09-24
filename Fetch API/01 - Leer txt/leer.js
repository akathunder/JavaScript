var contenido = document.querySelector('#contenido')
        function traer() {
            fetch('texto.txt') //fetch busca el url y hace promese
            .then(data => data.text())
            .then(data=>{
                console.log(data)
                contenido.innerHTML = `${data}`
            })
        } 

var contenido1 = document.getElementById("contenido1")
        function traer1() {
                fetch('texto1.txt')
                .then(data => data.text())
                .then(data => {
                    console.log(data)
                    contenido1.innerHTML = `${data}`
                })
        }