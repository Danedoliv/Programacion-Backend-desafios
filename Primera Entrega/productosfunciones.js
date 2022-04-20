const fs = require('fs')

class Prodcont {

   update(id, newProd){
       const route = './listaproductos.txt'
       const objectData = JSON.parse(fs.readFileSync(route, 'utf8'))
         const object = objectData.find(object => object.id == id)
            const index = objectData.indexOf(object)
            if(index !== -1) {
                objectData[index] = newProd 
                fs.writeFileSync(route, JSON.stringify(objectData, null, 4))
            }
    }
    save(object) {
        const route = './listaproductos.txt'
        const objectData = fs.readFileSync(route, 'utf-8')
        try {
            const objectList = JSON.parse(objectData)
            const lastObject = objectList[objectList.length - 1]
            const newId = lastObject.id + 1;
            object.id = newId
            objectList.push(object)
            fs.writeFileSync(route, JSON.stringify(objectList, null, 4 ))
        } catch (e) {
            console.log(e);
        }
        
    }
    
    getById(id){
        const route = './listaproductos.txt'
        const objectData = fs.readFileSync(route, 'utf-8')
        try {
            const objectList = JSON.parse(objectData)
            const object = objectList.find(object => object.id == id)
            return object
        } catch (e) {
            console.log(e);
        }
    }
    
    getAll(){
        const route = './listaproductos.txt'
        const objectData =  fs.readFileSync(route, 'utf-8')
        try {
            return JSON.parse(objectData)
        } catch (e) {
            console.log(e);
            return [];
        }
        
    }
    
    deleteById(id){
        const route = './listaproductos.txt'
        const objectData = fs.readFileSync(route, 'utf-8')
        try {
            const objectList = JSON.parse(objectData)
            const object = objectList.find(object => object.id == id)
            const index = objectList.indexOf(object)
            if(index !== -1) {
                objectList.splice(index, 1)
                fs.writeFileSync(route, JSON.stringify(objectList, null, 4 ))
            }
        } catch (e) {
            console.log(e);
        }
    }
    
    addProduct(id, cantidad){
        const route = './listacarrito.txt'
        const objectData = fs.readFileSync(route, 'utf-8')
        try {
            const objectList = JSON.parse(objectData)
            const product = objectList.find(product => product.id === id)
            const index = objectList.indexOf(product)
            if(index !== -1) {
                objectList[index].cantidad = cantidad
                fs.writeFileSync(route, JSON.stringify(objectList, null, 2))
            }
} catch (e) {
            console.log(e);
        }
    }


    deleteAll(){
        const route = './listaproductos.txt'
        fs.writeFileSync(route, '[]')
    }
    
}

    const prodcont = new Prodcont()
    module.exports = prodcont

    // console.log(prodcont.addProduct(2, 5));

    // console.log(prodcont.update(2, {
    // nombre: "PEPSI Cola",
    // descripcion: "PEPSI Cola",
    // codigo: "PEPSI",
    // precio: "$10",
    // stock: "5",
    // timestamp: "2020-05-05",
    // foto: "https://www.PEPSI-cola.com/content/dam/journey/us/en/images/cc-logo-stacked-rgb.png",
    // id: 2}))