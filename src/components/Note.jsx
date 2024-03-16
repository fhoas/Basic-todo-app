import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

function Note(props) {
  const [editedTitle, setEditedTitle] = useState(props.title);
  const [editedContent, setEditedContent] = useState(props.content);
  const [editMode, setEditMode] = useState(false); // Her not için ayrı editMode durumu

  function handleClick() {
    props.onDelete(props.id);
  }

  function handleEdit() {
    if (!editMode) {
      setEditMode(true); // Edit butonuna basıldığında sadece ilgili notun editMode durumunu güncelle
    } else {
      props.onEdit(props.id, editedTitle, editedContent);
      setEditMode(false); // Kaydet butonuna basıldığında editMode durumunu kapat
    }
  }

  function handleCheck() {
    props.onCheck(props.id);
  }

  return (
    <div
      className={`note bg-[var(--gray-9)] border h-[175px] text-white border-[var(--gray-6)] shadow-lg rounded-lg overflow-hidden m-4 flex flex-col justify-between`}
    >
      {editMode ? (
        <div className="p-4">
          <input
            type="text"
            className="text-xl font-semibold bg-transparent outline-none text-white border-b border-[var(--gray-6)] mb-2 w-full"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <input
            className="border-b border-[var(--gray-6)] mb-2 w-full mt-2 bg-transparent outline-none text-white"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
        </div>
      ) : (
        <div className="p-4">
          <h1
            className={`text-xl font-semibold ${
              props.isChecked ? "line-through italic" : ""
            }`}
          >
            {props.title}
          </h1>
          <p
            className={`mt-2 h-[60px] break-words ${
              props.isChecked ? "line-through italic" : ""
            }`}
          >
            {props.content}
          </p>
        </div>
      )}
      <div className="flex">
        <button
          className={`flex items-center justify-center w-1/3 bg-[var(--gray-10)] border-[var(--gray-6)] border-t text-white py-2 hover:bg-[var(--gray-8)] `}
          onClick={handleCheck}
        >
          <CheckIcon />
          <span>{props.isChecked ? "Uncheck" : "Check"}</span>
        </button>
        <button
          className={`flex items-center justify-center w-1/3 bg-[var(--gray-10)] border-[var(--gray-6)] border-t text-white py-2 hover:bg-[var(--gray-8)] ${
            editMode ? "bg-[var(--gray-8)] hover:bg-[var(--gray-8)]" : ""
          }`}
          onClick={handleEdit}
        >
          <EditIcon />
          <span>{editMode ? "Save" : "Edit"}</span>
        </button>
        <button
          className={`flex items-center justify-center w-1/3 bg-[var(--gray-10)] border-[var(--gray-6)] border-t text-white py-2 hover:bg-[var(--gray-8)]`}
          onClick={handleClick}
        >
          <DeleteIcon />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
}

export default Note;
