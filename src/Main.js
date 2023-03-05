function Main({ showNoteEditor }) {
    return (
      <div className="app-main">
        {!showNoteEditor && (
          <div className="app-main-message"> Select a note, or create one</div>
        )}
        {showNoteEditor && (
          <div className="main-note-edit">
            <input type="text" id="title" placeholder="Untitled" autoFocus />
            <textarea id="body" placeholder="Your Note Here"></textarea>
          </div>
        )}
      </div>
    );
  }
  
  export default Main;
  