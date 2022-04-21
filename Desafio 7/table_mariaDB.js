const { options } = require('./options/mariaDB.js');
const knex = require('knex')(options);


    // Tabla de productos    
    ( async ( ) => {
        try {
                await knex.schema.createTable('productos', table => {
                    table.increments('id')
                    table.string('name')
                    table.integer('price')
                    table.string('description')
                })
                console.log('Table created');
            } catch (error) {
                console.log(error);
            } finally {
                knex.destroy();
            }
        }
    )()