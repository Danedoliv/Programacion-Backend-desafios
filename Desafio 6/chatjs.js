const fs = require('fs')
class Chat {

    
    chatSave(object) {
        const route = './chatsave.txt'
        const objectData = fs.readFileSync(route, 'utf-8')
    
        try {
            const chatS = JSON.parse(objectData)
            chatS.push(object)
            fs.writeFileSync(route, JSON.stringify(chatS, null, 2))
        } catch (e) {
            console.log(e);
        } 
    }

    chatGetAll() {
        const route = './chatsave.txt'
        const objectData = fs.readFileSync(route, 'utf-8')
        try {
            return JSON.parse(objectData)
        } catch (e) {
            console.log(e);
            return [];
        }
    }
}

const chat = new Chat()
module.exports = chat
