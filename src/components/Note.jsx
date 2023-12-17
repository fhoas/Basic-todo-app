import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note bg-transparent border text-white border-[#5F6367] shadow-lg rounded-lg overflow-hidden m-4 flex flex-col justify-between">
      <div className="p-4">
        <h1 className="text-xl font-semibold">{props.title}</h1>
        <p className="mt-2">{props.content}</p>
      </div>
      <button
        className="flex items-center justify-center w-full bg-[#5F6367] text-white py-2 hover:bg-[#5f6367be]"
        onClick={handleClick}
      >
        <DeleteIcon />
        <span className="ml-2">Delete</span>
      </button>
    </div>
  );
}

export default Note;
