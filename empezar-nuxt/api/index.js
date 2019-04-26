const express = require("express");
const app = express();
const knex = require('./helper/knex');

// app.get('/', function(req, res) {
//     res.send("hello world");
// });
app.get('/', function(req, res) {
    knex.select().from('dat_knex').then((data) => {
        console.log(data);
        res.send(`<script>${console.log(data)}</script>`);
    })
})

module.exports = {
    path: '/api/',
    handler: app
};