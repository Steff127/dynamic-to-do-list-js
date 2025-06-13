document.addEventListener("DOMContentLoaded", function () {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to add a new task
  function addTask() {
    // Get and trim the input value
    const taskText = taskInput.value.trim();

    // Validate input
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create task item
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    // Create "Remove" button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    // Remove task when button is clicked
    removeButton.addEventListener("click", function () {
      taskList.removeChild(taskItem);
    });

    // Append elements
    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);

    // Clear input field
    taskInput.value = "";
  }

  // Attach event listener to the "Add Task" button
  addButton.addEventListener("click", addTask);

  // Enable adding tasks using the "Enter" key
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
