const express = require('express')
const app = express()
const PORT = 8080
// const moment = require('moment')

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
})
server.on("error", error => console.log(`Error en el servidor ${error}`))

let product = [
        {
            "title": 'Escuadra',
            "price": '123.45',
            "thumbnail": 'imagen',
            "id": 1
    
        },
        {
            "title": 'Calculadora',
            "price": '234.56',
            "thumbnail": 'imagen2',
            "id": 2
        },
        {
            "title": 'Terraqueo',
            "price": '345.67',
            "thumbnail": 'imagen3',
            "id": 3
        }
    ]
app.get('/productos', (req , res) => {
    res.send(product)

})

let random = Math.floor(Math.random()*product.length)
app.get('/productosRandom', (req , res) =>{
    res.send(console.log(random))
})


// const http = require('http')
// const moment = require('moment')

// const server = http.createServer((peticion, res) => {
//     res.end('Hola Mundo')
// })

// const connectedServer = server.listen(8080, () => {
//     const horaActual = moment().format('HH')
//     let mensaje
//     if (horaActual >= 6 && horaActual <= 12) {
//         mensaje = 'Buenos Dias'
//     } else if (horaActual >= 13 && horaActual <= 19){
//         mensaje = 'Buenas Tardes'
//     } else { 
//         mensaje = 'Buenas Noches'
//     }
//     console.log(`${mensaje} Servidor Http escuchando en el puerto ${connectedServer.address().port}`);
// })