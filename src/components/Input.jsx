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

    const regex = /^[a-zA-Z0-9\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

    if (
      (name === "title" && value.length <= 30 && regex.test(value)) ||
      (name === "content" && value.length <= 100 && regex.test(value))
    ) {
      setNote((prevNote) => {
        return {
          ...prevNote,
          [name]: value,
        };
      });
    }
  }

  function submitNote() {
    if (note.title === "" || note.content === "") {
      alert("Please provide a title and content");
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
    <div className="w-[600px] rounded border-[1px] text-[var(--gray-0)] border-[var(--gray-6)] hover:border-[var(--gray-5)] bg-[var(--gray-9)] m-auto py-8 px-6 h-fit relative">
      <input
        className="bg-[var(--gray-10)] w-full p-2 rounded border border-[var(--gray-6)] outline-none transition-all placeholder-[var(--gray-5)]"
        name="title"
        onChange={handleChange}
        value={note.title}
        placeholder="Title"
        onFocus={toggleExpand}
        maxLength="30"
      />
      <textarea
        className={`w-full bg-[var(--gray-10)] mt-2 p-2 rounded border border-[var(--gray-6)] outline-none transition-all resize-none placeholder-[var(--gray-5)] ${
          isExpanded ? "block" : "hidden"
        }`}
        name="content"
        onChange={handleChange}
        value={note.content}
        placeholder="Take a note..."
        rows="3"
        maxLength="100"
      />
      <button
        className={`flex items-center justify-center border-[1px] border-[var(--gray-6)] hover:border-[var(--gray-5)] bg-[var(--gray-8)] hover:bg-[var(--gray-7)] text-white cursor-pointer rounded-full w-[45px] h-[45px] ml-auto absolute top-[182px] right-[15px] ${
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
