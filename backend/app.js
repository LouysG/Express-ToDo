const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const notes = [];

app.get('/notes', (req, res, next) => {
    res.send(notes)
});

/*
app.post('/notes', (req, res, next) => {
    const note = req.query
    if (note) {
        notes.push(note)
        res.status(201).send(note)
    } else {
        res.status(400).send()
    }
});
*/

/*
app.put('/notes/:id', (req, res, next) => {
    const id = req.params.id;
    if (notes[id]) {
        notes[id] = req.query;
        res.send();
    } else {
        res.status(404).send();
    }
});
*/

/*
app.delete('/notes/:id', (req, res, next) =>  {
    const id = req.params.id;
    if (notes[id]) {
        notes.splice(d, 1)
        res.status(204).send();
    } else {
        res.status(404).send();
    }
});
*/


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
});
