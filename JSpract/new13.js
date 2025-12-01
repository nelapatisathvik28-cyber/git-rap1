// 1. Load saved tasks from localStorage or start with empty array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// 2. Function to display tasks in the list
function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = ""; // Clear before re-adding
  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.textContent = task.name;
    li.addEventListener("click", () => {
      tasks.splice(index, 1); // remove from array
      saveTasks();
      displayTasks();
    });
    taskList.appendChild(li);
  });
}

// 3. Function to save tasks to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// 4. Add new task when button clicked
document.getElementById("addBtn").addEventListener("click", () => {
  const taskInput = document.getElementById("taskInput");
  if (taskInput.value.trim() !== "") {
    tasks.push({ name: taskInput.value }); // push object into array
    saveTasks();
    displayTasks();
    taskInput.value = "";
  }
});

// 5. Show tasks on page load
displayTasks();
