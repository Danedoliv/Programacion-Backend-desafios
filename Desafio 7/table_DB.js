const {options} = require('./DB/ecommerce.js');
const sqlite3 = require('sqlite3').verbose();

( async ( ) => {
    try {
        const db = new sqlite3.Database(options.connection.filename);
        await db.run(`CREATE TABLE IF NOT EXISTS chat (
            email TEXT,
            text TEXT
        )`);
        console.log('Table created');
    } catch (error) {
        console.log(error);
    } 
})();
