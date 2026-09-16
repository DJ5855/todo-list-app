# To-Do List Application

A simple and elegant to-do list application with local storage functionality. Built with vanilla HTML, CSS, and JavaScript.

## Features

✅ **Add Tasks** - Easily add new tasks to your to-do list

✅ **Mark Complete** - Check off tasks as you complete them

✅ **Delete Tasks** - Remove tasks you no longer need

✅ **Filter Tasks** - View all tasks, active tasks, or completed tasks

✅ **Local Storage** - Your tasks are automatically saved to your browser's local storage

✅ **Persistent Data** - Tasks remain even after you close and reopen your browser

✅ **Task Counter** - Keep track of your progress with a task counter

✅ **Clear Completed** - Bulk delete all completed tasks at once

✅ **Responsive Design** - Works seamlessly on desktop and mobile devices

✅ **Beautiful UI** - Modern gradient background with smooth animations

## Getting Started

### Requirements
- A modern web browser (Chrome, Firefox, Safari, Edge, etc.)
- No dependencies or installations needed!

### Installation

1. Clone the repository:
```bash
git clone https://github.com/DJ5855/todo-list-app.git
cd todo-list-app
```

2. Open `index.html` in your web browser

### Usage

1. **Add a Task**: Type your task in the input field and click "Add Task" or press Enter
2. **Complete a Task**: Check the checkbox next to a task to mark it as completed
3. **Delete a Task**: Click the "Delete" button next to any task
4. **Filter Tasks**:
   - Click "All" to see all tasks
   - Click "Active" to see only incomplete tasks
   - Click "Completed" to see only completed tasks
5. **Clear Completed**: Click "Clear Completed" to remove all completed tasks at once

## Local Storage

Your tasks are automatically saved to your browser's local storage under the key `todos`. This means:

- Your tasks persist even after closing the browser
- Each browser has its own task list
- Clearing browser data/cache will delete your tasks
- The storage is limited to approximately 5-10MB per domain

## Project Structure

```
todo-list-app/
├── index.html      # HTML structure
├── styles.css      # Styling and animations
├── script.js       # Application logic and local storage handling
└── README.md       # This file
```

## Browser Compatibility

- ✅ Chrome 4+
- ✅ Firefox 3.5+
- ✅ Safari 4+
- ✅ Edge (all versions)
- ✅ Internet Explorer 8+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile, etc.)

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients, animations, and flexbox
- **JavaScript (Vanilla)** - No frameworks or libraries
- **Local Storage API** - Browser's built-in storage mechanism

## How Local Storage Works

The application uses the browser's `localStorage` API to persist data:

```javascript
// Save tasks
localStorage.setItem('todos', JSON.stringify(todos));

// Load tasks
const todos = JSON.parse(localStorage.getItem('todos'));
```

## Features Breakdown

### Data Structure
Each task is stored as an object with the following properties:
```javascript
{
  id: timestamp,          // Unique identifier
  text: string,           // Task description
  completed: boolean,     // Completion status
  createdAt: string       // Creation timestamp
}
```

### Key Functions
- `loadTodosFromStorage()` - Loads tasks from local storage
- `saveTodosToStorage()` - Saves tasks to local storage
- `addTodo()` - Creates a new task
- `deleteTodo(id)` - Removes a task
- `toggleTodo(id)` - Marks task as complete/incomplete
- `renderTodos()` - Updates the UI with current tasks
- `getFilteredTodos()` - Filters tasks based on current filter
- `updateTaskCount()` - Updates the task counter

## Tips & Tricks

💡 **Keyboard Shortcut** - Press Enter to quickly add a task

💡 **Check Progress** - The task counter shows how many tasks are active vs total

💡 **Organize** - Use filters to focus on what's important

💡 **Export Data** - Check your browser's Developer Tools → Application → Local Storage to view your data

## Future Enhancements

Potential features for future versions:
- Task priority levels
- Due dates and reminders
- Task categories/tags
- Search functionality
- Dark mode
- Task editing
- Drag and drop to reorder
- Recurring tasks
- Sync across devices
- Import/Export functionality

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests to improve the application.

## Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

**Happy Task Managing!** ✨