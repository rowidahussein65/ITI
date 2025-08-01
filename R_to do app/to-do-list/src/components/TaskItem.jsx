import { useTodo } from "../context/useTodo";

const TaskItem = ({ todo }) => {
  const { deleteTodo, markAsDone } = useTodo();

  return (
    <li
      className="rounded-3 mb-2 d-flex justify-content-between align-items-center"
      style={{
        backgroundColor: "#1a0c2c",
        padding: "12px",
        color: "#fff",
      }}
    >
      <span
        className={`task-text ${todo.done ? "done text-success" : ""}`}
        style={{ flexGrow: 1, marginRight: "10px", fontSize: "14px" }}
      >
        {todo.title}
      </span>

      <div className="task-buttons d-flex gap-2">
        {!todo.done && (
          <button
            className="btn p-0"
            onClick={() => markAsDone(todo.id)}
            style={{ color: "#ccc" }}
          >
            <i className="fas fa-check"></i>
          </button>
        )}
        <button
          className="btn p-0"
          onClick={() => deleteTodo(todo.id)}
          style={{ color: "#ccc" }}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
