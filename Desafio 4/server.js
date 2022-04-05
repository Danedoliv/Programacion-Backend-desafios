const express = require('express')
const container = require('./products.js')
const app = express()


app.use('/api', express.static(__dirname + '/products'));

app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
});

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.route('/api/products')
    .get((req, res) => {
        res.send(container.getAll())
    })
    .post((req, res) => {
        const newProd = req.body
        container.save(newProd)
        res.send(container)
    })

app.route('/api/products/:id')
    .get((req, res) => {
        res.send(container.getById(req.params.id))
    })
    .put((req, res) => {
        const newProd = req.body
        container.update(req.params.id, newProd)
        res.send(container)
    })

app.route('/api/products/:id')
    .delete((req, res) => {
        container.deleteById(req.params.id)
        res.send(container)
    })

app.listen(8080)

/*  
GET '/api/productos' -> devuelve todos los productos.
GET '/api/productos/:id' -> devuelve un producto según su id.
POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.
PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.
DELETE '/api/productos/:id' -> elimina un producto según su id.
*/