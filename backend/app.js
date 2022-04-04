const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3001;
let notes = [];
let id = 0;

app.use(cors())
app.get('/', (req, res, next) => {
    res.send(notes)
});

app.use('/add', (req, res, next) => {
    notes.push({
        content: '',
        id: id
    })
    id = id + 1;
    console.log(notes);
    res.send();
})

app.use('/delete/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    notes = notes.filter(note => note.id !== id);
    res.send();
})

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
