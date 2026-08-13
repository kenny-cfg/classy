const todoListDiv = document.getElementById("todo-list");
const newTodoTextInput = document.getElementById("new-todo-item");
const submitButton = document.getElementById("submit-todo");

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

submitButton.addEventListener("click", () => {
  const newTodoText = newTodoTextInput.value;
  if (todoList.includes(newTodoText)) {
    return;
  }
  todoList.push(newTodoText);
  updateTodoListElement();
})