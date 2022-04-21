const {options} = require('./DB/ecommerce.js');
const sqlite3 = require('sqlite3').verbose();


class Containerchat {
    
    saveChat(chat) {
        const db = new sqlite3.Database(options.connection.filename);
        db.run(`INSERT INTO chat (email, text) VALUES ('${chat.email}', '${chat.text}')`)
            {
                console.log('data inserted');
            }
    }
}

const chatContainer = new Containerchat();
module.exports = chatContainer;

// console.log(chatContainer.saveChat({
  
//     email: "Ana@hotmail.com",
//     text: "¡Genial!"
  
// }));

  
    
