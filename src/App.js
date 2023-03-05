import { useState } from "react";
import uuid from "react-uuid";
import Side from "./Side";
import Main from "./Main";
import Header from "./Header";

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);
  const [showSide, setShowSide] = useState(true);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled",
      body: "",
      lastModified: Date.now(),
    };
    setNotes([newNote, ...notes]);
  };

  return (
    <div className="App">
      {showSide && (
        <Side
          notes={notes}
          onAddNote={onAddNote}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
        />
      )}
      <Main showSide={showSide} />
      <Header onToggleSide={() => setShowSide((prev) => !prev)} />
    </div>
  );
}

export default App;
