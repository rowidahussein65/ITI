let todoList = document.getElementById("todo-list");
let doneList = document.getElementById("done-list");
let todoCount = document.getElementById("todo-count");
let doneCount = document.getElementById("done-count");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function addTask() {
  const taskInput = document.getElementById("new-task");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a valid todo title.");
    return;
  }

  const newTodo = {
    id: Date.now(),
    title: taskText,
    done: false,
  };

  todos.push(newTodo);
  saveToLocalStorage();
  renderTodos();

  taskInput.value = "";
}

function deleteTask(id) {
  todos = todos.filter((todo) => todo.id !== id);
  saveToLocalStorage();
  renderTodos();
}

function markAsDone(id) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, done: true };
    }
    return todo;
  });
  saveToLocalStorage();
  renderTodos();
}

function renderTodos() {
  todoList.innerHTML = "";
  doneList.innerHTML = "";

  let todoCounter = 0;
  let doneCounter = 0;

  todos.forEach((todo) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = todo.title;

    const btns = document.createElement("div");
    btns.className = "task-buttons";

    const del = document.createElement("button");
    del.innerHTML = '<i class="fas fa-trash-alt"></i>';
    del.onclick = () => deleteTask(todo.id);
    btns.appendChild(del);

    if (todo.done) {
      span.classList.add("done");
      doneList.appendChild(li);
      doneCounter++;
    } else {
      const check = document.createElement("button");
      check.innerHTML = '<i class="fas fa-check"></i>';
      check.onclick = () => markAsDone(todo.id);
      btns.appendChild(check);

      todoList.appendChild(li);
      todoCounter++;
    }

    li.appendChild(span);
    li.appendChild(btns);
  });

  todoCount.textContent = todoCounter;
  doneCount.textContent = doneCounter;
}

renderTodos();
