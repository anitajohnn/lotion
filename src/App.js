import { useState } from "react";
import uuid from "react-uuid";
import Side from "./Side";
import Main from "./Main";
import Header from "./Header";

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled",
      body: "",
      lastModified: Date.now()
    };
    setNotes([newNote, ...notes])
  };

  return (
    <div className="App">
      <Header onToggleSidebar={() => setShowSidebar(!showSidebar)} />
      {showSidebar && (
        <Side
          notes={notes}
          onAddNote={onAddNote}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
        />
      )}
      <Main />
    </div>
  );
}

export default App;