import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

function Note(props) {
  const [editedTitle, setEditedTitle] = useState(props.title);
  const [editedContent, setEditedContent] = useState(props.content);
  const [editMode, setEditMode] = useState(false);

  function handleClick() {
    props.onDelete(props.id);
  }

  function handleEdit() {
    const regex = /^[a-zA-Z0-9\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

    if (
      editedTitle.length > 30 ||
      !regex.test(editedTitle) ||
      editedContent.length > 100 ||
      !regex.test(editedContent)
    ) {
      alert("Please provide valid title and content within limits.");
      return;
    }

    if (!editMode) {
      setEditMode(true);
    } else {
      props.onEdit(props.id, editedTitle, editedContent);
      setEditMode(false);
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
          <span className="ml-1">{props.isChecked ? "Uncheck" : "Check"}</span>
        </button>
        <button
          className={`flex items-center justify-center w-1/3 bg-[var(--gray-10)] border-[var(--gray-6)] border-t text-white py-2 hover:bg-[var(--gray-8)] ${
            editMode ? "bg-[var(--gray-8)] hover:bg-[var(--gray-8)]" : ""
          }`}
          onClick={handleEdit}
        >
          <EditIcon />
          <span className="ml-1">{editMode ? "Save" : "Edit"}</span>
        </button>
        <button
          className={`flex items-center justify-center w-1/3 bg-[var(--gray-10)] border-[var(--gray-6)] border-t text-white py-2 hover:bg-[var(--gray-8)]`}
          onClick={handleClick}
        >
          <DeleteIcon />
          <span className="ml-1">Delete</span>
        </button>
      </div>
    </div>
  );
}

export default Note;
