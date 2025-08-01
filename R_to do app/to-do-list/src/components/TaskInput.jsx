// src/components/TaskInput.jsx
import { useState } from "react";
import { useTodo } from "../context/useTodo"; // ✅ التصحيح هنا

const TaskInput = () => {
  const [text, setText] = useState("");
  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return alert("Please enter a valid todo title.");
    addTodo(text);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex align-items-center gap-2 mb-4"
    >
      <input
        type="text"
        className="form-control rounded"
        placeholder="Add a new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="btn"
        style={{ backgroundColor: "#a362ff", color: "white" }}
      >
        <i className="fas fa-plus"></i>
      </button>
    </form>
  );
};

export default TaskInput;
