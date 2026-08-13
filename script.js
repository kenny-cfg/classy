const todoListDiv = document.getElementById("todo-list");

const todoList = [
  "Teach students some OOP",
  "Tell my child off"
]

const updateTodoListElement = () => {
  todoListDiv.innerHTML = "";
}

updateTodoListElement();