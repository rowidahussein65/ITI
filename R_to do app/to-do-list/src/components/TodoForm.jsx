import { useState } from "react";
import { useTodo } from "../context/useTodo";

const TodoForm = () => {
  const [text, setText] = useState("");
  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      addTodo(text);
      setText("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex align-items-center gap-2 mb-4"
    >
      <input
        type="text"
        className="form-control flex-grow-1"
        placeholder="Add a task"
        style={{ height: "40px", fontSize: "14px" }}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-primary d-flex align-items-center justify-content-center"
        style={{ width: "40px", height: "40px" }}
      >
        +
      </button>
    </form>
  );
};

export default TodoForm;
