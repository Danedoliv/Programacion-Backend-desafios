class Usuario { 
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros = []
        this.mascotas = mascotas = []
    }

    addMascota(mascota) {
    this.mascotas.push(mascota)
    } 

    countMascota() {
      return  `${this.nombre} agregó ${this.mascotas.length} mascotas Recientemente`
    }

    addBook(libro, autor) {
        this.libros.push({libro , autor}) 
       
    }

    getBookNames() {
        
        return this.libros.forEach(function(libro) {
            console.log(`Libro Agregado: ${libro.libro}`);
        })
       
    }
    
    getBooks(){
        
      return this.getBookNames()
    }
    getFullName() {
        return `Bienvenido ${this.nombre} ${this.apellido}`
    }
}



const usuario = new Usuario (nombre="Daniel", apellido="Olivier")
console.log(usuario.getFullName());

const usuario1 = new Usuario (nombre="Guillermo", apellido="Stolk", mascotas=[])
console.log(usuario1.getFullName());
usuario1.addMascota('Perro')
usuario1.addMascota('Gato')
usuario1.addMascota('Vaca')
console.log(usuario1.countMascota());

const usuario3 = new Usuario (nombre="Angel", apellido="Saldivia", libros=[])
console.log(usuario3.getFullName());
usuario3.addBook("Harry Potter", "J. K. Rowling");
usuario3.addBook("Lord of the Rings", "J. R. R. Tolkien");
console.log(usuario3.getBooks());


