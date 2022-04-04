import '../App.css';
import { useState, useEffect} from 'react';
import Note from './Note.js';

function App() {
  const [notes, setNotes] = useState([])
  const [id, setId] = useState(0)

  async function getNotes() {
    const response = await fetch('http://localhost:3001')
    const parsedResponse = await response.json()
    setNotes(parsedResponse)
  }
  

  // Define event handlers
  const handlers = {
    handleAdd: async () => {
      await fetch('http://localhost:3001/add', {
        method: 'DELETE',
      });
      /*setNotes([
        ...notes,
        {
          content: '',
          title: '',
          id: id
        }
      ]);
      setId(id + 1)*/
    },
    handleChange: (e) => {
      const id = parseInt(e.target.id);
      const changedNote = notes.filter(note => note.id === id);
      changedNote.content = e.target.value;

    },
    handleDelete: async (e) => {
      const id = parseInt(e.target.id);
      console.log(id)
      await fetch(`http://localhost:3001/delete/${id}`)
      /* setNotes(notes.filter(note => note.id !== id 
      )); */
    }
  }

  //Convert notes to array of Note Components
  const noteComponents = [];
  for (const note of notes) {
    noteComponents.push(<Note content={note.content} title={note.title} id={note.id} handlers={handlers}/>);
  }

  useEffect(() => {
    getNotes()
  })

  return (
    <div className="app">
      {noteComponents}
      <button className="addNote" type="Button" onClick={handlers.handleAdd}>+</button>
    </div>
  );
}

export default App;
