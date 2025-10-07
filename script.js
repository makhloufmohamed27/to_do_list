function addTask() {
    const input = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    if (input.value.trim() !== '') {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task-item';
        taskDiv.innerHTML = `
            <span>${input.value}</span>
            <div>
                <button onclick="toggleTask(this)">✓</button>
                <button onclick="deleteTask(this)">X</button>
            </div>
        `;
        taskList.appendChild(taskDiv);
        input.value = '';
    }
}

function toggleTask(button) {
    const taskDiv = button.parentElement.parentElement;
    taskDiv.classList.toggle('completed');
}

function deleteTask(button) {
    const taskDiv = button.parentElement.parentElement;
    taskDiv.remove();
}
