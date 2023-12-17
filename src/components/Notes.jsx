import Note from "./Note";
import React from "react";

const Notes = (props) => {
  function deleteNote(idToDelete) {
    const updatedNotes = notesFromStorage.filter(
      (note, index) => index !== idToDelete
    );

    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    props.setNotes(updatedNotes);
  }

  const notesFromStorage = JSON.parse(localStorage.getItem("notes")) || [];

  return (
    <div className="p-[50px] grid grid-cols-4 gap-4">
      {notesFromStorage.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
};

export default Notes;
