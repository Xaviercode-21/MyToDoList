 // JavaScript to toggle the user account dropdown
 document.querySelector('.user-account').addEventListener('click', function() {
    document.querySelector('.dropdown').classList.toggle('show');
});

document.getElementById('logout').addEventListener('click',function(){
    if(confirm("Are you sure you want to logout?")){
        window.close();
    }
});

// Select the form
const addForm = document.forms['addTask'];

// Select the list where tasks will be added
const list = document.querySelector('.todo-list');

addForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the input value
    const value = addForm.querySelector('input[type="text"]').value;

    if (value.trim() === '') {
        alert('Please enter a task.');
        return; // Prevent adding empty tasks
    }

    // Create new elements
    const li = document.createElement('li');
    const taskName = document.createElement('span');
    const deleteButton = document.createElement('button');
    const editButton = document.createElement('button');

    // Add text content
    taskName.textContent = value;
    deleteButton.textContent = 'delete';
    editButton.textContent = 'edit';

    // Add classes (if needed for styling)
    taskName.classList.add('name');
    deleteButton.classList.add('delete');
    editButton.classList.add('edit');

    // Append elements to the list item
    li.appendChild(taskName);
    li.appendChild(deleteButton);
    li.appendChild(editButton);

    // Append the list item to the task list
    list.appendChild(li);

    // Clear the input field after adding the task
    addForm.querySelector('input[type="text"]').value = '';
});

// Event edit and delete buttons
document.querySelector('.todo-list').addEventListener('click', function(e) {
    const li = e.target.closest('li');
    
    if (e.target.classList.contains('delete')) {
        li.remove(); // Remove task
    } 
    
    if (e.target.classList.contains('edit')) {
        const newTask = prompt('Edit your task:', li.querySelector('.name').textContent);
        if (newTask) li.querySelector('.name').textContent = newTask.trim();
    }
});

