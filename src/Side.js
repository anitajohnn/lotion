function Side({notes, onAddNote, activeNote, setActiveNote }){
    return(
    <div className="app-side">
        <div className="app-sidebar-header">
            <h1>Notes</h1>
            
            <button onClick={onAddNote}>&#43;</button>
        </div>

        <div className="app-side-notes">
            {notes.map((note)=>(
                <div className={`app-side-note ${note.id === activeNote && "active"}`}
                onClick={() => setActiveNote(note.id)}>
                <div className="app-side-title">
                    <strong> {note.title}</strong>
                    
                </div>
                <p>{note.body && note.body.substr(0,100) + "..."}</p>

                <small className="note-meta">
                    
                    {new Date (note.lastModified).toLocaleDateString("en-CA",{
                        month:"long",
                        day: 'numeric',
                        year: 'numeric',
                       
                        hour: "2-digit",
                        minute: "2-digit"
                    })}
                </small>
            </div>

            ))}
            
        </div>
   
   
    </div>

    );

}


export default Side;