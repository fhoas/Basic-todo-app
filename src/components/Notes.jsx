import React, { useState } from "react";
import Note from "./Note";

const Notes = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [checkedNotes, setCheckedNotes] = useState([]);

  function deleteNote(idToDelete) {
    const updatedNotes = notesFromStorage.filter(
      (note, index) => index !== idToDelete
    );

    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    props.setNotes(updatedNotes);
  }

  function editNote(idToEdit, newTitle, newContent) {
    const updatedNotes = notesFromStorage.map((note, index) => {
      if (index === idToEdit) {
        return {
          ...note,
          title: newTitle,
          content: newContent,
        };
      }
      return note;
    });

    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    props.setNotes(updatedNotes);
  }

  function checkNote(idToCheck) {
    if (checkedNotes.includes(idToCheck)) {
      setCheckedNotes(checkedNotes.filter((id) => id !== idToCheck));
    } else {
      setCheckedNotes([...checkedNotes, idToCheck]);
    }
  }

  function toggleEditMode() {
    setEditMode(!editMode);
  }

  const notesFromStorage = JSON.parse(localStorage.getItem("notes")) || [];

  return (
    <div className="p-[50px] grid grid-cols-3 gap-4">
      {notesFromStorage.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            onEdit={editNote}
            onCheck={checkNote}
            editMode={editMode}
            isChecked={checkedNotes.includes(index)}
            toggleEditMode={toggleEditMode}
          />
        );
      })}
    </div>
  );
};

export default Notes;
