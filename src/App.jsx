import React, { useState, useEffect } from "react";
import Notes from "./components/Notes";
import Input from "./components/Input";

function App() {
  const initialNotes = JSON.parse(localStorage.getItem("notes")) || [];
  const [notes, setNotes] = useState(initialNotes);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes, newNote];
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      return updatedNotes;
    });
  }

  useEffect(() => {
    const initialNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(initialNotes);
  }, []);

  return (
    <div>
      <Input onAdd={addNote} />
      <Notes allNotes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
