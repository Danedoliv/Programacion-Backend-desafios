const fs = require('fs')

try {
    const ruta = './fyh.txt'
    fs.writeFileSync(ruta, Date().toString())
    const datosArchivo = fs.readFileSync(ruta, 'utf-8')
    console.log(datosArchivo);
} catch (error) {
    throw new Error(`hubo un error!: ${error.message}`)
}