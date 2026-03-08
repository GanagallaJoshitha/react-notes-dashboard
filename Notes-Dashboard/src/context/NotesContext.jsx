import React, { createContext, useState, useEffect } from 'react';

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {

  const [notes, setNotes] = useState(() => {
   
    const savedNotes = localStorage.getItem('notes-app-data');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  
  useEffect(() => {
    localStorage.setItem('notes-app-data', JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const newNote = { id: Date.now(), text };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  return (
    <NotesContext.Provider value={{ notes, addNote }}>
      {children}
    </NotesContext.Provider>
  );
};