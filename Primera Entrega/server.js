const express = require("express");
const productos = require("./productosfunciones.js");
const carrito = require("./carritofunciones.js");
const app = express();
const fecha = new Date();
const fechaActual = fecha.getFullYear() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getDate();

//ADMIN
function administrador(req, res, next) {
  if (req.session.admin == true) {
    next();
  } else {
    res.send("No tienes permisos para acceder a esta página");
  }
}
app.administrador = administrador;

//APP USE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//CONSTANTES
const allProd = productos.getAll();
const allCart = carrito.getAll();

//API
app.get("/api", (req, res) => {
  res.send(allProd);
});
//API/PRODUCTOS
app.get("/api/productos", (req, res, next) => {
  res.send(allProd);
});
app.get("/api/productos/:id?", (req, res) => {
  const id = req.params.id;
  const prod = productos.getById(id);
  res.send(prod);
});
app.post("/api/productos", (req, res) => {
  if (req.body.administrador == true) {
    const newProd = req.body;
    newProd.timestamp = fechaActual;
    productos.save(newProd);
    res.send(allProd);
  } else {
    res.send("No tienes permisos para acceder a esta página");
  }
});
app.put("/api/productos/:id", (req, res) => {
  if (req.body.administrador == true) {
    const id = req.params.id;
    const newProd = req.body;
    productos.update(id, newProd);
    res.send(allProd);
  } else {
    res.send("No tienes permisos para acceder a esta página");
  }
});
app.delete("/api/productos/:id", (req, res) => {
  if (req.body.administrador == true) {
    productos.deleteById(req.params.id);
    res.send(allProd);
  } else {
    res.send("No tienes permisos para acceder a esta página");
  }
});













//API/CARRITO
app.post("/api/carrito", (req, res) => {
  const newCart = req.body; 
  newCart.timestamp = fechaActual;
  carrito.save(newCart);
  res.send(carrito.getById(newCart.id));
}
);
app.delete("/api/carrito", (req, res) => {
  carrito.deleteAll();
  res.send(allCart);
}
);
app.get("/api/carrito/:id/productos", (req, res) => {
  res.send(allCart);
}
);

//Para incorporar productos al carrito por su id de producto
app.post("/api/carrito/:id/productos", (req, res) => {
  const id = req.params.id;
  const newProd = req.body;
  newProd.cantidad = + 1;
  carrito.update(id);
  res.send(allCart);



}
);
// app.delete("/api/carrito/:id/productos:id_prod", (req, res) => {
//   const id = req.params.id;
//   const id_prod = req.params.id_prod;
//   const prod = carrito.getById(id);
//   carrito.deleteById(id_prod);
//   res.send(prod);
// }
// );

app.listen(8080, function () {
  console.log("Servidor corriendo en http://localhost:8080");
});


// POST: '/:id/productos' - Para incorporar productos al carrito por su id de producto
// DELETE: '/:id/productos/:id_prod' - Eliminar un producto del carrito por su id de carrito y de producto
