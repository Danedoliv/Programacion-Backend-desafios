const fs = require('fs')
class Container {

    save(object) {
        const route = './productos.txt'
        const objectData = fs.readFileSync(route, 'utf-8')
        try {
            const objectList = JSON.parse(objectData)
            const lastObject = objectList[objectList.length - 1]
            const newId = lastObject.id + 1;
            object.id = newId
            objectList.push(object)
            fs.writeFileSync(route, JSON.stringify(objectList, null, 2))
        } catch (e) {
            console.log(e);
        }
        
    }
    
    getById(id){
        const route = './productos.txt'
        const objectData = fs.readFileSync(route, 'utf-8')
        try {
            const objectList = JSON.parse(objectData)
            return objectList.find(product => product.id === id)
        } catch (e) {
            console.log(e);
            return []
        }
    }
    
    getAll(){
        const route = './productos.txt'
        const objectData = fs.readFileSync(route, 'utf-8')
        try {
            return JSON.parse(objectData)
        } catch (e) {
            console.log(e);
            return [];
        }
        
    }
    
    deleteById(id){
        const route = './productos.txt'
        const objectData = fs.readFileSync(route, 'utf-8')
        try {
            const objectList = JSON.parse(objectData)
            const product = objectList.find(product => product.id === id)
            const index = objectList.indexOf(product)
            if(index !== -1) {
                objectList.splice(index, 1)
                fs.writeFileSync(route, JSON.stringify(objectList, null, 2))
            }
        } catch (e) {
            console.log(e);
        }
    }
    
    deleteAll(){
        const route = './productos.txt'
        fs.writeFileSync(route, '[]')
    }
    
    }

    const container = new Container()

    console.log(container.deleteById(4))
    





//============================================================================================//
//CLASES

// const sleep = ms => new Promise(r => setTimeout(r, ms));

// const mostrarLetras = async (texto, operacionFinal) => {
//     for ( let i = 0; i < texto.length; i++ ) {
//         await sleep(1000)
//         console.log(texto[i])
//     }
//     operacionFinal();
// }

// const fin = () => console.log('terminé')

// setTimeout(mostrarLetras, 0, '¡Hola!', fin)
// setTimeout(mostrarLetras, 250, '¡Hola!', fin)
// setTimeout(mostrarLetras, 500, '¡Hola!', fin)

//Ejercicio 2

// const fs = require('fs');

// try {
//     const route = './fyh.txt';
//     fs.writeFileSync(route, Date().toString())
//     const objectData = fs.readFileSync('./yoNoExisto.txt', 'utf-8');
//     console.log(objectData)
// } catch (e) {
//     throw new Error(`Recorcholis, hubo un error!: ${e.message}`)
// }


//ejercicio 3

// const fs = require('fs');

// const route = './package.json';
// fs.readFile(route, 'utf-8', (err, object) => {
//     if(err) throw new Error(`No pudimos leer archivo: ${err.message}`);

//     const info = {
//         contenidoStr: JSON.stringify(object),
//         contenidoObj: JSON.parse(object),
//         size: fs.statSync(route).size
//     }

//     console.log({ info })

//     fs.writeFile('./info.txt', JSON.stringify(info, null, 2), err => {
//         if (err) throw new Error(`Todo mal ${err.message}`);
//     })
    
// });

//ejercicio 4

// const fs = require('fs')

// const prueba = async () => {
//     try {
//         const contenido = await fs.promises.readFile('./info.txt', 'utf-8');
//         console.log(contenido);
//         const objetoModificable = JSON.parse(contenido)
//         objetoModificable.contenidoObj.author = 'Coderhouse'
//         await fs.promises.writeFile('./package.json.coderhouse', JSON.stringify(objetoModificable, null, 2))
//     } catch (e) {
//         throw new Error('problemas')
//     }

// }

// prueba();