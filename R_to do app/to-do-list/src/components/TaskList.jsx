import { useTodo } from "../context/useTodo";

const TaskList = () => {
  const { todos, deleteTodo, markAsDone } = useTodo();

  return (
    <ul className="list-unstyled">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="bg-dark p-3 rounded-3 mb-2 d-flex justify-content-between align-items-center"
        >
          <span
            className={`flex-grow-1 me-3 ${
              todo.done ? "text-success text-decoration-line-through" : ""
            }`}
            style={{ fontSize: "14px" }}
          >
            {todo.text}
          </span>
          <div className="d-flex gap-2">
            <button
              onClick={() => markAsDone(todo.id)}
              className="btn btn-sm btn-outline-light px-2 py-1"
            >
              ✔
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="btn btn-sm btn-outline-light px-2 py-1"
            >
              🗑
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
