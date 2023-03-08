import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Main = ({ activeNote, onUpdateNote, onDeleteNote }) => {
  const [editing, setEditing] = useState(false);

  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    });
  };

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const formatDate = (when) => {
    const date = new Date(when);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const onCalendarDateChange = (e) => {
    const newDate = new Date(e.target.value);
    const formattedDate = formatDate(newDate);
    const updatedNote = {
      ...activeNote,
      lastModified: newDate.getTime(),
    };
    onUpdateNote(updatedNote);
  };

  const onDeleteClick = () => {
    const shouldDelete = window.confirm("Are you sure you want to delete this note?");
    if (shouldDelete) {
      onDeleteNote(activeNote.id);
    }
  };

  const onSaveClick = () => {
    const updatedNote = {
      ...activeNote,
      lastModified: Date.now(),
    };
    onUpdateNote(updatedNote);
    setEditing(false);
  };

  const onEditClick = () => {
    setEditing(true);
  };

  if (!activeNote) return <div className="no-active-note">No Active Note</div>;

  return (
    <div className="app-main">
      <div className={`app-main-note-edit${editing ? " editing" : ""}`}>
        <input
          type="text"
          id="title"
          placeholder="Note Title"
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
          disabled={!editing}
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
          readOnly={!editing}
        />
      </div>
      <div className={`app-main-note-date-picker${editing ? " editing" : ""}`}>
        <label htmlFor="date-picker">Last Modified:</label>
        <input
          type="date"
          id="date-picker"
          value={formatDate(activeNote.lastModified)}
          onChange={(e) => onCalendarDateChange(new Date(e.target.value))}
          disabled={!editing}
        />
      </div>
      <div className={`app-main-note-delete${editing ? " editing" : ""}`}>
        <button onClick={onDeleteClick} disabled={editing}>
          Delete
        </button>
      </div>
      <div className={`app-main-note-save${editing ? " editing" : ""}`}>
        {editing ? (
          <button onClick={onSaveClick}>Save</button>
        ) : (
          <button onClick={onEditClick}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default Main;
