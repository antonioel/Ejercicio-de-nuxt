const knex = require('../helper/knex');
exports.pueba = (data) => {
    return new Promise((resolve, reject) => {
        knex('dat_knex').insert({
                nombre: 'Antonio pruba',
                text: 'este es un test de conectividad',
            }).then((resp) => { console.log("datos agregados");
                resolve(resp) })
            .catch((err) => { console.log(err);
                reject(err) })
    });
}
exports.getprueba = (data) => {
    return new Promise((resolve, reject) => {
        knex.select().from('dat_knex').then((resp) => {
            console.log(resp);
            resolve(resp);
        }).catch((err) => {
            console.log(err);
            reject(err);
        })
    })
}