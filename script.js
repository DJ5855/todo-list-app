// To-Do List Application with Local Storage

const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const taskCount = document.getElementById('taskCount');
const clearCompleted = document.getElementById('clearCompleted');
const filterBtns = document.querySelectorAll('.filter-btn');

let todos = [];
let currentFilter = 'all';

const STORAGE_KEY = 'todos';

// Initialize app
function init() {
    loadTodosFromStorage();
    renderTodos();
    updateTaskCount();
}

// Load todos from local storage
function loadTodosFromStorage() {
    const stored = localStorage.getItem(STORAGE_KEY);
    todos = stored ? JSON.parse(stored) : [];
}

// Save todos to local storage
function saveTodosToStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

// Add new todo
function addTodo() {
    const text = todoInput.value.trim();
    
    if (text === '') {
        alert('Please enter a task!');
        return;
    }

    const newTodo = {
        id: Date.now(),
        text: text,
        completed: false,
        createdAt: new Date().toLocaleString()
    };

    todos.unshift(newTodo);
    saveTodosToStorage();
    renderTodos();
    updateTaskCount();
    todoInput.value = '';
    todoInput.focus();
}

// Delete todo
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveTodosToStorage();
    renderTodos();
    updateTaskCount();
}

// Toggle todo completion
function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        saveTodosToStorage();
        renderTodos();
        updateTaskCount();
    }
}

// Clear all completed todos
function clearAllCompleted() {
    const completedCount = todos.filter(t => t.completed).length;
    
    if (completedCount === 0) {
        alert('No completed tasks to clear!');
        return;
    }

    if (confirm(`Delete ${completedCount} completed task(s)?`)) {
        todos = todos.filter(todo => !todo.completed);
        saveTodosToStorage();
        renderTodos();
        updateTaskCount();
    }
}

// Filter todos based on current filter
function getFilteredTodos() {
    switch (currentFilter) {
        case 'active':
            return todos.filter(todo => !todo.completed);
        case 'completed':
            return todos.filter(todo => todo.completed);
        default:
            return todos;
    }
}

// Render todos
function renderTodos() {
    const filteredTodos = getFilteredTodos();
    todoList.innerHTML = '';

    if (filteredTodos.length === 0) {
        todoList.innerHTML = `
            <div class="empty-state">
                <p>📭 No tasks yet!</p>
                <p>${currentFilter === 'all' ? 'Add a new task to get started.' : `No ${currentFilter} tasks.`}</p>
            </div>
        `;
        return;
    }

    filteredTodos.forEach(todo => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        li.innerHTML = `
            <input 
                type="checkbox" 
                class="todo-checkbox" 
                ${todo.completed ? 'checked' : ''}
                onchange="toggleTodo(${todo.id})"
            >
            <span class="todo-text" title="${todo.text}">${escapeHtml(todo.text)}</span>
            <button class="delete-btn" onclick="deleteTodo(${todo.id})">Delete</button>
        `;
        todoList.appendChild(li);
    });
}

// Update task count
function updateTaskCount() {
    const activeTasks = todos.filter(todo => !todo.completed).length;
    const totalTasks = todos.length;
    
    if (totalTasks === 0) {
        taskCount.textContent = '0 tasks';
    } else {
        taskCount.textContent = `${activeTasks} of ${totalTasks} task${totalTasks !== 1 ? 's' : ''}`;
    }

    // Disable clear button if no completed tasks
    clearCompleted.disabled = todos.filter(t => t.completed).length === 0;
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Set active filter button
function setActiveFilter(filter) {
    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    currentFilter = filter;
    renderTodos();
}

// Event Listeners
addBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') addTodo();
});

clearCompleted.addEventListener('click', clearAllCompleted);

filterBtns.forEach(btn => {
    btn.addEventListener('click', e => setActiveFilter(e.target.dataset.filter));
});

// Initialize on page load
window.addEventListener('load', init);