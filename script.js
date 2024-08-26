document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const taskDate = document.getElementById('taskDate');
    const taskTime = document.getElementById('taskTime');
    const addTaskButton = document.getElementById('addTask');
    const clearCompletedButton = document.getElementById('clearCompleted');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', addTask);
    clearCompletedButton.addEventListener('click', clearCompleted);

    function addTask() {
        const taskValue = taskInput.value.trim();
        const dateValue = taskDate.value;
        const timeValue = taskTime.value;

        if (taskValue === '') {
            alert('Please enter a task.');
            return;
        }

        const li = document.createElement('li');
        li.classList.add('task-item');
        li.innerHTML = `
            <span class="task-text">${taskValue}</span>
            <span class="date-time">${dateValue} ${timeValue}</span>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
            <input type="checkbox" class="complete-checkbox">
        `;
        
        taskList.appendChild(li);

        taskInput.value = '';
        taskDate.value = '';
        taskTime.value = '';

        li.querySelector('.edit-btn').addEventListener('click', () => editTask(li));
        li.querySelector('.delete-btn').addEventListener('click', () => deleteTask(li));
        li.querySelector('.complete-checkbox').addEventListener('change', () => toggleCompletion(li));
    }

    function editTask(li) {
        const taskText = li.querySelector('.task-text');
        const newText = prompt('Edit task:', taskText.textContent);
        if (newText !== null) {
            taskText.textContent = newText;
        }
    }

    function deleteTask(li) {
        if (confirm('Are you sure you want to delete this task?')) {
            li.remove();
        }
    }

    function toggleCompletion(li) {
        li.classList.toggle('completed');
    }

    function clearCompleted() {
        const completedTasks = taskList.querySelectorAll('.completed');
        completedTasks.forEach(task => task.remove());
    }
});
