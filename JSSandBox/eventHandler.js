// const li = document.createElement("li");

// li.className="list-group-item";
// li.id="new-item";
// li.setAttribute("title", "New Task");
// li.appendChild(document.createTextNode("Hello"));
// const a = document.createElement("a");
// a.href="#";
// a.className="float-right remove";
// const i = document.createElement("i");
// // i.className="fa fa-times";
// // a.appendChild(i);
// a.innerHTML='<i class="fa fa-times"></i>'
// li.appendChild(a);
// document.querySelector("ul").appendChild(li);

// console.log(li);

let val;
const list = document.querySelectorAll('li:nth-child(odd)');
// val= list;

// list.forEach(function(li){
// li.textContent="Hello";
// });

function addItem(e){
    e.preventDefault();
    const newItem = document.createElement('li');
    newItem.className='list-group-item';
    // const text = document.getElementById('newTask');
    // console.log(text);
    // newItem.appendChild(document.createTextNode(text));
    newItem.appendChild(document.createTextNode('new Task'));
    const a = document.createElement("a");
    a.href="#";
    a.className="float-right remove";
    a.innerHTML='<i class="fa fa-times"></i>'
    a.addEventListener('click',function(e){
        e.target.parentNode.parentNode.remove();
    });
    newItem.appendChild(a); 
    document.querySelector('ul').appendChild(newItem);
    console.log(newItem);
    
}

document.querySelector('.remove').addEventListener('click',function(e){
    e.target.parentNode.parentNode.remove();
});

function refresh(){ document.querySelectorAll('.remove').forEach(function(icon){
        icon.addEventListener('click',function(e){
            e.target.parentNode.parentNode.remove();
        })
    });
}

refresh();



document.getElementById('submitTask').addEventListener('click',addItem);