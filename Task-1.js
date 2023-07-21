// Get references to HTML elements
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

// Function to create a new task
function createTask() {
  const taskText = todoInput.value.trim();
  if (taskText !== '') {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>${taskText}</span>
      <button class="delete-button">Delete</button>
    `;
    todoList.appendChild(listItem);
    todoInput.value = '';

    // Add event listener to delete button
    const deleteButton = listItem.querySelector('.delete-button');
    deleteButton.addEventListener('click', deleteTask);

    // Add event listener to mark task as completed
    const taskTextSpan = listItem.querySelector('span');
    taskTextSpan.addEventListener('click', markTaskCompleted);
  }
}

// Function to delete a task
function deleteTask() {
  const listItem = this.parentNode;
  todoList.removeChild(listItem);
}

// Function to mark a task as completed
function markTaskCompleted() {
  const listItem = this.parentNode;
  listItem.classList.toggle('completed');
}

// Add event listener to the add button
addButton.addEventListener('click', createTask);
