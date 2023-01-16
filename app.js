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
    
    e.preventDefault();
}
