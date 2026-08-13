const todoListDiv = document.getElementById("todo-list");

const todoList = [
  "Teach students some OOP",
  "Tell my child off"
]

const updateTodoListElement = () => {
  todoListDiv.innerHTML = "";
  for (const todo of todoList) {
    const listItem = document.createElement("li");
    listItem.textContent = todo;
    todoListDiv.appendChild(listItem);
  }
}

updateTodoListElement();