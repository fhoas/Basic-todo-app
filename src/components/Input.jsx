import React, { useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import "../index.css";

function Input(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote() {
    if (note.title === "" || note.content === "") {
      alert("Please provide a title");
      return;
    }

    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  }

  function toggleExpand() {
    setIsExpanded(true);
  }

  return (
    <div className="w-[600px] rounded border-[1px] text-white border-[#5F6367] bg-transparent m-auto py-8 px-6 h-fit relative">
      <input
        className="w-full p-2 rounded border border-[#5F6367] bg-transparent outline-none transition-all	"
        name="title"
        onChange={handleChange}
        value={note.title}
        placeholder="Title"
        onFocus={toggleExpand}
      />
      <textarea
        className={`w-full mt-2 p-2 rounded border border-[#5F6367] bg-transparent outline-none transition-all resize-none ${
          isExpanded ? "block" : "hidden"
        }`}
        name="content"
        onChange={handleChange}
        value={note.content}
        placeholder="Take a note..."
        rows="3"
      />
      <button
        className={`flex items-center justify-center bg-[#5F6367] hover:bg-[#484a4b] text-white cursor-pointer rounded-full w-[45px] h-[45px] ml-auto absolute top-[182px] right-[15px] ${
          isExpanded ? "block" : "hidden"
        }`}
        onClick={submitNote}
      >
        <AddBoxIcon className="text-2xl" />
      </button>
    </div>
  );
}

export default Input;
