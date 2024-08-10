document.getElementById('add-btn').addEventListener('click', function() {
    const input = document.getElementById('todo-input');
    const newTask = input.value.trim();
    
    if (newTask) {
        const li = document.createElement('li');
        li.textContent = newTask;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', function() {
            this.parentElement.remove();
        });

        li.appendChild(deleteBtn);
        document.getElementById('todo-list').appendChild(li);
        input.value = '';
    }
});