import Main from "./Main";


import {useState} from "react";
import uuid from "react-uuid";
import Side from "./Side";
import Header from "./Header";

function App() {
    const [notes, setNotes] = useState([]);
    const [activeNote, setActiveNote] = useState(false);


    const onAddNote = () => {
        const newNote = {
            id: uuid(),

            title: "Untitled",

            body:  "", 

            lastModified: Date.now()


        };
        setNotes([newNote, ...notes])
    };
    return <div className="App">
        <Side 
        notes = {notes} 
        onAddNote={onAddNote}
        activeNote= {activeNote}
        setActiveNote={setActiveNote} />
        <Main />
        <Header/>

  
        </div>
}

export default App;
