// Defining UI vriables:

const form =  document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all the event Listeners

loadEventListeners();

// load all the event Listeners
function loadEventListeners(){
    // add task events

    form.addEventListener('submit',addTask);
}


// Add Task

function addTask(e){
    if(taskInput.value ===''){
        alert('Add a Task');
    }

    // create Li Element

    const li = document.createElement('li');

    // Add a class
    li.className = 'collection-item';

    // Create a text node and append to li

    li.appendChild(document.createTextNode(taskInput.value));

    // Create nre Link Element:
    const link = document.createElement('a');

    // Add a class
    link.className = 'delete-item secondary-content';

    // Add Icon HTML

    link.innerHTMl = '<i class="fa-fa-remove"> </i>'

    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

    // Clear Input
     taskInput.value = '';
    
    e.preventDefault();
}
