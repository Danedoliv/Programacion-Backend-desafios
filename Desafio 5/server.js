const express = require('express')
const app = express()
const data =  []

//App Use
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

//App Routes
app.get('/', (req, res) => {
    res.render('form', {data})
})

app.get('/products', (req, res) => {
    res.render('form', {data})
}).post('/products', (req, res) => {
    data.push(req.body)
    res.redirect('/products')
})

app.get('/products/previews', (req, res) => {
    res.render('previews', {data})
})

app.listen(8080, () => console.log('Server is running on port 8080')) 
