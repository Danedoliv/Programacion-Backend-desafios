const express = require("express");
const container = require("./products.js");
const chatContainer = require('./chatjs.js');
const app = express();
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");


//App Use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
const containerData = container.getAll();

// //App Routes
app.get("/", (req, res) => {
  res.render("form", { containerData });
});
app
  .get("/products", (req, res) => {
    res.render("form", { containerData });
  })
  .post("/products", (req, res) => {
    container.save(req.body);
    res.redirect("/products");
  });
app.get("/products/previews", (req, res) => {
  res.render("previews", { containerData });
});

//CHAT
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);
const chat = chatContainer.chatGetAll();
app.use(express.static("public"));

io.on("connection", function (socket) {
  console.log("User connected");
  socket.emit("messages", chat);
  

  socket.on("new-message", (data) => {
    chatContainer.chatSave(data);
    io.sockets.emit("messages", data);
  });
});

httpServer.listen(8080, function () {
  console.log("Servidor corriendo en http://localhost:8080");
});