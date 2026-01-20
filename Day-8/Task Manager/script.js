let tasks = [];
let currentFilter = "all";

const input = document.getElementById("inputTask");
const addBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// ---------- Local Storage ----------
function saveToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function init() {
  const stored = localStorage.getItem("tasks");
  if (stored) tasks = JSON.parse(stored);
  renderTasks();
}

// ---------- Add Task ----------
function addTask() {
  const text = input.value.trim();
  if (!text) return;

  tasks.push({
    id: Date.now(),
    text,
    completed: false,
    createdAt: new Date().toLocaleTimeString()
  });

  input.value = "";
  saveToLocalStorage();
  renderTasks();
}

// ---------- Toggle ----------
function toggleTask(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  saveToLocalStorage();
  renderTasks();
}

// ---------- Delete ----------
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveToLocalStorage();
  renderTasks();
}

// ---------- Render ----------
function renderTasks() {
  let filtered = tasks;

  if (currentFilter === "active")
    filtered = tasks.filter(t => !t.completed);
  if (currentFilter === "completed")
    filtered = tasks.filter(t => t.completed);

  document.getElementById("totalTasks").textContent = tasks.length;
  document.getElementById("activeTasks").textContent =
    tasks.filter(t => !t.completed).length;
  document.getElementById("completedTasks").textContent =
    tasks.filter(t => t.completed).length;

  if (filtered.length === 0) {
    taskList.innerHTML = `<p style="text-align:center;color:#999;">📝No tasks</p>`;
    return;
  }

  taskList.innerHTML = filtered.map(task => `
    <li class="task-item ${task.completed ? "completed" : ""}">
      <div class="checkbox ${task.completed ? "checked" : ""}"
           onclick="toggleTask(${task.id})"></div>
      <span class="task-text">${task.text}</span>
      <button class="delete-btn"
              onclick="deleteTask(${task.id})">Delete</button>
    </li>
  `).join("");
}

// ---------- Events ----------
addBtn.addEventListener("click", addTask);
input.addEventListener("keydown", e => {
  if (e.key === "Enter") addTask();
});

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    document.querySelectorAll(".filter-btn")
      .forEach(b => b.classList.remove("active"));
    e.target.classList.add("active");
    currentFilter = e.target.dataset.filter;
    renderTasks();
  });
});

document.getElementById("clearCompleted").addEventListener("click", () => {
  tasks = tasks.filter(task => !task.completed);
  saveToLocalStorage();
  renderTasks();
});

init();
