import React, { useState, useRef, useEffect, useContext } from 'react';
import { NotesContext } from '../context/NotesContext';

const NoteInput = () => {
  const [text, setText] = useState('');
  const { addNote } = useContext(NotesContext);
  
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addNote(text);
    setText('');
  };

 return (
    <form onSubmit={handleAdd} className="input-group">
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's on your mind?"
      />
      <button type="submit">Add</button>
    </form>
  );
};
export default NoteInput;