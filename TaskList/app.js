//Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event Listeners
loadEventListeners();

function loadEventListeners(){
    //DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);

    //Add task event
    form.addEventListener('submit', addTask);
    
    //remove task event
    taskList.addEventListener('click',removeTask);

    //clear task event
    clearBtn.addEventListener('click', clearTasks);

    //filter
    filter.addEventListener('keyup',filterTasks);

}

function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task');
    }

    //create li element
    const li = document.createElement('li');
    li.className = 'collection-item';
    //create text node
    li.appendChild(document.createTextNode(taskInput.value));
    // create new link element
    const link = document.createElement('a');
    link.className='delete-item secondary-content';
    //add icon html
    link.innerHTML = '<i class="fa fa-times"></i>';
    li.appendChild(link);
    console.log(li);

    //Append Li to ul();
    taskList.appendChild(li);

    //Store in LS
    storeTaskinLocalStorage(taskInput.value);

    //Clear Input
    taskInput.value = '';
    e.preventDefault();
}

//Store Task
function storeTaskinLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks = [];
    } else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


//Remove Task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();

            //remove from ls
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

//clear tasks
function clearTasks(e){
    // taskList.innerHTML = '';

    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
    
    clearTasksFromLocalStorage();
}

//clear tasks from LS
function clearTasksFromLocalStorage(){
    localStorage.clear();
}

//filterTasks

function filterTasks(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }
        else{
            task.style.display = 'none';
        }
    });

    console.log(text);
}

//getTasks from local storage
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
        //create li element
        const li = document.createElement('li');
        li.className = 'collection-item';

        //create text node
        li.appendChild(document.createTextNode(task));
        
        // create new link element
        const link = document.createElement('a');
        link.className='delete-item secondary-content';
        
        //add icon html
        link.innerHTML = '<i class="fa fa-times"></i>';
        li.appendChild(link);
        console.log(li);
        
        //Append Li to ul();
        taskList.appendChild(li);
    });
}

function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks')=== null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task,index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}
