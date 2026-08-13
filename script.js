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
    if (todo.toUpperCase() === todo) {
      listItem.style.backgroundColor = "red";
    }
    listItem.addEventListener("mouseenter", () => {
      listItem.style.fontWeight = "bold";
      console.log("On mouse enter");
    })
    listItem.addEventListener("mouseleave", () => {
      listItem.style.fontWeight = "";
    })


    /* Old way of defining the function
    listItem.addEventListener("mouseleave", function() {
      console.log("On mouse leave")
    })
    */
  }
}

updateTodoListElement();

function enableDisableSubmitButtonOLD_WAY() {
  const newTodoText = newTodoTextInput.value;
  if (newTodoText === "" || todoList.includes(newTodoText)) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
}

const enableDisableSubmitButton = () => {
  const newTodoText = newTodoTextInput.value;
  if (newTodoText === "" || todoList.includes(newTodoText)) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
}

const submitNewTodo = () => {
   const newTodoText = newTodoTextInput.value;
  if (todoList.includes(newTodoText)) {
    return;
  }
  todoList.push(newTodoText);
  updateTodoListElement();
  newTodoTextInput.value = "";
}

submitButton.addEventListener("click", () => submitNewTodo())

newTodoTextInput.addEventListener("keyup", event => {
  if (event.key === "Enter") {
    submitNewTodo();
  }
  enableDisableSubmitButton();
})

enableDisableSubmitButton();