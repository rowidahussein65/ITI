import React from "react";
import { useTodo } from "./context/useTodo.jsx";
import TodoForm from "./components/TodoForm";
import TaskList from "./components/TaskList";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const { todos } = useTodo();

  const todosList = todos.filter((t) => !t.done);
  const doneList = todos.filter((t) => t.done);

  return (
    <div
      className="container py-5 text-white bg-dark rounded shadow"
      style={{ maxWidth: "500px" }}
    >
      <TodoForm />

      <h3 className="mt-4">
        Tasks to do -{" "}
        <span className="badge bg-secondary">{todosList.length}</span>
      </h3>
      <TaskList type="todo" />

      <h3 className="mt-4">
        Done - <span className="badge bg-secondary">{doneList.length}</span>
      </h3>
      <TaskList type="done" />
    </div>
  );
}

export default App;
