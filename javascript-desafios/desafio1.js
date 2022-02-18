class Usuario { 
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros = []
        this.mascotas = mascotas = []
    }

    addMascota = ['Perro', 'Gato', "Vaca"]
    

    countMascotas() {
            this.mascotas = this.addMascota
        return this.mascotas.length
    }

    addBook = [  
        {nombre:'El senor de las moscas',
        autor:'William Golding'},

        {nombre:'Fundacion',
        autor:'Isaac Asimov'}]

    getBookNames() {
        this.libros = this.addBook
      return this.libros = [{nombre:'El senor de las moscas'},{nombre:'Fundacion'}]
    }
    

    getFullName() {
        return `Bienvenido ${this.nombre}${this.apellido}`
    }
}



const usuario1 = new Usuario ('Daniel',' Olivier')
console.log(usuario1.getFullName());

const usuario2 = new Usuario ()
console.log(usuario2.addMascota);
const usuario3 = new Usuario ()
console.log(usuario3.countMascotas());

const usuario4 = new Usuario ()
console.log(usuario4.getBookNames());
const usuario5 = new Usuario ()
console.log(usuario5.addBook);

