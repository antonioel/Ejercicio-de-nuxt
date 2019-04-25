var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'vist',
        password: '123dojini',
        database: 'db_vt',
    }
});
module.exports = knex;
/*Conection prueba
 **Host: localhost
 **Username: vist
 **Password: 123dojini
 **Port: 3306
 **db: db_vt
 */