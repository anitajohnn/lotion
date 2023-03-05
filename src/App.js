import { useState } from "react";
import uuid from "react-uuid";
import Side from "./Side";
import Main from "./Main";
import Header from "./Header";

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(null);
  const [showSide, setShowSide] = useState(true);
  const [showNoteEditor, setShowNoteEditor] = useState(false);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled",
      body: "",
      lastModified: Date.now(),
    };
    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };

  return (
    <div className="App">
      {showSide && (
        <Side
          notes={notes}
          onAddNote={onAddNote}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
          setShowNoteEditor={setShowNoteEditor}
        />
      )}
      <Main showNoteEditor={showNoteEditor} />
      <Header onToggleSide={() => setShowSide((prev) => !prev)} />
    </div>
  );
}

export default App;
