// colour gradient..

heading = document.getElementById('taskHeading');
form = document.querySelector('form');
newTask = document.getElementById('newTask');
taskList = document.getElementById('taskList');
clearAll = document.getElementById('clearAll');

document.body.addEventListener('click',deleteItem);
form.addEventListener('submit', runEvent);
clearAll.addEventListener('click',removeAll)

function runEvent(e){
    e.preventDefault();
    li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newTask.value));
    a = document.createElement('a');
    a.href='#';
    a.className='float-right remove';
    a.innerHTML = '<i class="fa fa-times"></i>';
    li.appendChild(a);
    taskList.appendChild(li);    
    newTask.value='';
}


function removeAll(e){
    let count = 0;
    document.querySelectorAll('li').forEach(function(li){
        li.remove();
        count++;
    });
    console.log(`Cleared ${count} tasks`);
    newTask.value='';
    e.preventDefault();
}

function deleteItem(e){
    if(e.target.parentElement.classList.contains('remove')){
        e.target.parentElement.parentElement.remove();
    }

}

// newTask.addEventListener('keyup',function(e){

//     document.querySelector('h4').textContent=e.target.value;

// });