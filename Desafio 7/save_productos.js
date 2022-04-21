const {options} = require('./options/mariaDB.js');
const knex = require('knex')(options);


class Container {

    saveProduct(product) {
        knex('productos').insert(product)
            .then(() => console.log('data inserted'))
            .catch((err) => {console.log(err); throw err})
            .finally(() => {
                knex.destroy();
            });
    }

}

const container = new Container();
module.exports = container;



  