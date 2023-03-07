import ReactMarkdown from "react-markdown";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'

const Main = ({ activeNote, onUpdateNote, onDeleteNote }) => {
  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    });
  };

  const onDeleteClick = () => {
    onDeleteNote(activeNote.id);
  };

  if (!activeNote) return <div className="no-active-note">No Active Note</div>;

  const onSaveClick = () => {
    const updatedNote = {
      ...activeNote,
      lastModified: Date.now(),
    };
    onUpdateNote(updatedNote);
  };
  
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          placeholder="Note Title"
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />
        <ReactQuill
          id="body"
          placeholder="Your Note Here"
          value={activeNote.body}
          onChange={(content, delta, source) => {
            if (source === "user") {
              onEditField("body", content);
            }
          }}
        />
        
      </div>
      <div className="app-main-note-delete">
        <button onClick={onDeleteClick}>Delete</button>
        
      </div>

      <div className="app-main-note-save">
        <button onClick={onSaveClick}>Save</button>
      </div>
      
    </div>
  );
        };
  export default Main;  