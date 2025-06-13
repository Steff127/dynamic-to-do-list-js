function addTask() {
  // Get the input field and task list
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Retrieve and trim the user's input
  const taskText = taskInput.value.trim();

  // Check if taskText is not empty
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // Create a new <li> element for the task
  const taskItem = document.createElement("li");
  taskItem.textContent = taskText;

  // Create a "Remove" button for the task
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";

  // Fix: Explicitly add the required class
  removeButton.classList.add("remove-btn");

  // Add onclick event to remove task when button is clicked
  removeButton.addEventListener("click", function () {
    taskList.removeChild(taskItem);
  });

  // Append the remove button to the task item
  taskItem.appendChild(removeButton);

  // Append the task item to the task list
  taskList.appendChild(taskItem);

  // Clear the task input field after adding the task
  taskInput.value = "";
}
