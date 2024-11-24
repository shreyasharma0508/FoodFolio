import React, { useState, useEffect } from "react";

function Notes() {
  const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem("notes")) || []);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (newNote.trim() === "") return;
    setNotes([...notes, { text: newNote, date: new Date().toLocaleDateString() }]);
    setNewNote("");
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div className="notes">
      <h2>Notes</h2>
      <div className="note-input">
        <textarea
          placeholder="Write a note..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button onClick={addNote}>Add Note</button>
      </div>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <p>{note.text}</p>
            <small>{note.date}</small>
            <button onClick={() => deleteNote(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;
