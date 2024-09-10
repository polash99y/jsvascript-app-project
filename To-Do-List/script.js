const addButton = () => {
  const todoInput = document.getElementById("todo-input");
  const todoInputValue = todoInput.value.trim();
  if (todoInputValue !== "") {
    const taskList = document.getElementById("task-list");
    const li = document.createElement("li");
    li.innerHTML =
      '<input type="checkbox">' +
      todoInputValue +
      "<button onClick='deleteTask(this)'>delete</button>";
    taskList.appendChild(li);

    todoInput.value = "";
  } else {
    alert("please add a task");
  }
};

const deleteTask = (btn) => {
  const li = btn.parentNode;
  li.parentNode.removeChild(li);
};

const deletedTaskedChecked = () => {
  const taskList = document.getElementById("task-list");
  const checkboxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  checkboxes.forEach((checkbox) => {
    const li = checkbox.parentNode;
    li.parentNode.removeChild(li);
  });
};
