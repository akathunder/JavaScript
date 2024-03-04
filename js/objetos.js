// var arreglo = ['HTML',10,true];
var h1 = document.getElementById("saludo");
h1.innerHTML = "Objetos"

// OBJETOS
// var objeto = {
//     nombre: 'html',
//     duaracion: 15,
//     estado: true,
//     capitulos: {
//         nombre: 'intro',
//         videos: 10
//     }
// }

// console.log(objeto.capitulos.nombre);

//ARRAYS
var arrayObjetos = [
    {
        nombre:'HTML',
        estado:true
    },
    {
        nombre:'CSS',
        estado:true
    },
    {
        nombre:'JS',
        estado:false
    }
]

//recorrer el array
// console.log(arrayObjetos[0].nombre);
for( let indice of arrayObjetos ){
    console.log(indice.nombre);
}

// arrayApi
var arrayApi = [
            {
                "fecha":"2020-09-24T03:00:00.000Z",
                "valor":781.44
            },
            {
                "fecha":"2020-09-23T03:00:00.000Z",
                "valor":773.4
            },
            {
                "fecha":"2020-09-22T03:00:00.000Z",
                "valor":772.83
            }
        ]

//recorrer el array
// console.log(arrayObjetos[0].nombre);
for( let indice of arrayApi ){
    console.log(indice);
}