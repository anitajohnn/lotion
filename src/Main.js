import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import the styles





function Main({ showNoteEditor }) {
    return (
      <div className="app-main">
        {!showNoteEditor && (
          <div className="app-main-message"> Select a note, or create one</div>
        )}
        {showNoteEditor && (
          <div className="main-note-edit">
          <input type="text" id="title" placeholder="Untitled" autoFocus/>
          <ReactQuill id="body" placeholder="Your Note Here" />
        </div>
        )}
      </div>
    );
  }
  
  export default Main;
  