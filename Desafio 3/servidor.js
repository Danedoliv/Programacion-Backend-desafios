const express = require('express');
const moment = require('moment');
const app = express();
const PORT = 8080;
const container = require('./index.js');


const server = app.listen(PORT, () => {
    console.log(`Server http listening in port ${server.address().port}`);
})


server.on("error", error => console.log(`Error in server ${error}`));

app.get('/', (req, res) => {
    res.send('<h1 style = "color: blue"> Bienvenidos al servidor express  <h1/>');
});


app.get('/productos', (req, res) =>  {
    res.send(container.getAll());
});

app.get('/productosRandom',  (req, res) => {
    res.send(container.getRandom());
})

// let visits = 0;
// app.get('/visits', (req, res) => { 
//     visits++;
//     res.send(`<h1 style = "color: blue" > Visits: ${visits} </h1>`);
// });

// app.get('/fyh', (req, res) => {
//     res.send({ fyh: moment().format('YYYY-MM-DD HH:mm:ss') });
// })

