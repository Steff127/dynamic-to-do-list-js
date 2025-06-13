document.addEventListener("DOMContentLoaded", function () {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Load tasks from localStorage on page load
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    storedTasks.forEach((taskText) => addTask(taskText, false)); // Load tasks without re-saving
  }

  // Function to add a new task
  function addTask(taskText, save = true) {
    // If function is triggered by button press, retrieve input value
    if (typeof taskText !== "string") {
      taskText = taskInput.value.trim();
    }

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
    removeButton.classList.add("remove-btn");

    // Remove task when button is clicked
    removeButton.addEventListener("click", function () {
      taskList.removeChild(taskItem);
      removeTask(taskText); // Remove from localStorage
    });

    // Append elements
    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);

    // Save task to localStorage if necessary
    if (save) {
      saveTask(taskText);
    }

    // Clear input field
    taskInput.value = "";
  }

  // Function to save task to localStorage
  function saveTask(taskText) {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    storedTasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
  }

  // Function to remove task from localStorage
  function removeTask(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    storedTasks = storedTasks.filter((task) => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
  }

  // Attach event listener to the "Add Task" button
  addButton.addEventListener("click", function () {
    addTask(taskInput.value);
  });

  // Enable adding tasks using the "Enter" key
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask(taskInput.value);
    }
  });

  // Load saved tasks from localStorage when the page loads
  loadTasks();
});
