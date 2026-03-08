import React, { useContext, useState, useMemo } from 'react';
import { NotesContext } from '../context/NotesContext';

const NotesList = () => {
  const { notes } = useContext(NotesContext);
  const [selectedId, setSelectedId] = useState(null);

 
  const totalNotesCount = useMemo(() => {
    return notes.length;
  }, [notes]);

  return (
    <div>
      <div className="stats-badge">
        Total Notes: {totalNotesCount}
      </div>
      <ul style={{ padding: 0 }}>
        {notes.map((note) => (
          <li
            key={note.id}
            onClick={() => setSelectedId(note.id)}
            className={`note-item ${selectedId === note.id ? 'selected' : ''}`}
          >
            {note.text}
          </li>
        ))}
      </ul>
    </div>
  );    
};

export default NotesList;