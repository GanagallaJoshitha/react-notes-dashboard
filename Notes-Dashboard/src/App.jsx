import './App.css';
import { NotesProvider } from './context/NotesContext';
import NoteInput from './components/NoteInput';
import NotesList from './components/NotesList';

function App() {
  return (
    <NotesProvider>
      <div className="dashboard-container">
        <h1>Notes Dashboard</h1>
        <NoteInput />
        <NotesList />
      </div>
    </NotesProvider>
  );
}

export default App;