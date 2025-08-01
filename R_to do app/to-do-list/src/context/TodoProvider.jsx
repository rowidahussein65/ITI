import React, { useEffect, useState } from "react";
import TodoContext from "./TodoContext";

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      done: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const markAsDone = (id) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, done: true } : todo))
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, markAsDone }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
