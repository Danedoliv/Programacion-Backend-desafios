class Usuario { 
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros = [
            {nombre:'El senor de las moscas',
            autor:'William Golding'},
            {nombre:'Fundacion',
            autor:'Isaac Asimov'}
        ]
        this.mascotas = mascotas = ['Perro', 'Gato']
    }

    addMascota(){
        this.mascotas.push('Vaca')
       return this.mascotas
    }

    countMascotas() {
      return this.mascotas.length
    }

    getBooks() { 
        return this.libros = [
            'El senor de las moscas', 'Fundacion' 
       ]
    }

    getFullName() {
        return `Bienvenido ${this.nombre}${this.apellido}`
    }
}

const usuario1 = new Usuario ('Daniel',' Olivier')
console.log(usuario1.getFullName());

const usuario2 = new Usuario ()
const usuario4 = new Usuario ()
console.log(usuario4.addMascota());
console.log(usuario2.countMascotas());

const usuario3 = new Usuario ();
console.log(usuario3.getBooks());