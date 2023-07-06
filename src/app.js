const express = require('express');
const app = express();
const port = 8080;
const knex = require('knex')(require('../knexfile.js')['development'])

app.listen(port, ()=> {console.log(`Knex server listening on port ${port}`)})

app.get('/', (req, res) =>{
    res.send('Application up and running.')
})

app.get('/pets', (req, res) =>{
    knex('pet')
        .select('*')
        .then(pets => {
            var petNames = pets.map(pet => pet.name)
            res.json(pets)
        })
})