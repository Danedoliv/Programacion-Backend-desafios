const fs = require('fs')

class Cartcont {

 


    update(id, newProd){
        const route = './listacarrito.txt'
        const objectData = JSON.parse(fs.readFileSync(route, 'utf8'))
          const object = objectData.find(object => object.id == id)
             const index = objectData.indexOf(object)
             if(index !== -1) {
                 objectData[index] = newProd 
                 fs.writeFileSync(route, JSON.stringify(objectData, null, 4))
             }
     }


    save(object) {
        const route = './listacarrito.txt'
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
        const route = './listacarrito.txt'
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
        const route = './listacarrito.txt'
        const objectData =  fs.readFileSync(route, 'utf-8')
        try {
            return JSON.parse(objectData)
        } catch (e) {
            console.log(e);
            return [];
        }
        
    }
    
    deleteById(id){
        const route = './listacarrito.txt'
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
        const route = './listacarrito.txt'
        fs.writeFileSync(route, '[]')
    }

    addProduct(id,cantidad){
        const route = './listacarrito.txt'
        const objectData = fs.readFileSync(route, 'utf-8')
        try {
            const objectList = JSON.parse(objectData)
            const product = objectList.find(product => product.id === id)
            const index = objectList.indexOf(product)
            if(index !== -1) {
                objectList[index].stock = cantidad
                fs.writeFileSync(route, JSON.stringify(objectList, null, 2))
            }
} catch (e) {
            console.log(e);
        }
    }

   

}

    const cartcont = new Cartcont()
    module.exports = cartcont

