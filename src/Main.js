import ReactMarkdown from "react-markdown";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import the styles



const Main = ({ activeNote, onUpdateNote }) => {
  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeNote) return <div className="no-active-note">Select a note, or create one</div>;

  return (
    <div className="app-main" >
      <div className="app-main-note-edit">
        <input 
          type="text"
          id="title"
          placeholder="Note Title"
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />

        <ReactQuill id="body" placeholder="Your Note Here" value={activeNote.body}
          onChange={(e) => onEditField("body", e.target.value)} />

       
      </div>
      
      
    </div>
  );
};

export default Main;
