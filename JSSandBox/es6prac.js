class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }


}

//UI Elements

const UIFirstName = document.getElementById('first-name');
const UILastName = document.getElementById('last-name');
const UIDoB = document.getElementById('dob');
const UISubmit = document.getElementById('submit');
const UIUserList = document.getElementById('user-list');
const UIUserCard = document.getElementById('user-card');
let users = [];



//Event Listeners
UISubmit.addEventListener('click', addNewUser);
UIUserCard.addEventListener('click', listAction);


//UI methods
function addNewUser(e) {
  if (users.length === 0) {
    UIUserList.innerText = "";
  }
  const user = new Person(UIFirstName.value.toUpperCase(), UILastName.value.toUpperCase(), UIDoB.value);
  //create new list object
  const li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(`${user.firstName} ${user.lastName}`));

  li.setAttribute('user-list-index', users.length);

  const button = document.createElement('button');
  button.className = "btn btn-default btn-sm show-details mr-1 float-right border-success text-success";
  button.appendChild(document.createTextNode('Show details'));
  li.appendChild(button);


  UIUserList.appendChild(li);


  users.push(user);
  console.log(users);
  e.preventDefault();
}

function listAction(e) {

  if (e.target.classList.contains('show-details')) {
    const index = parseInt(e.target.parentElement.getAttribute('user-list-index'));
    console.log(index);
    const user = users[index];

    alert(`First Name: ${user.firstName} \nLast Name: ${user.lastName} \nDate Of Birth: ${user.birthday.toDateString()} \nAge: ${user.calculateAge()}
    `);



  }
}


// function saveToLocalStorage(user){
//   if(localStorage.getItem('users')===null){
//     users = [];
//   }
//   else{
//     users = JSON.parse(localStorage.getItem('users'));
//   }
//   users.push(user);
//   localStorage.setItem('users', JSON.stringify(users));
// }

// function removeFromLocalStorage(user){
//   if(localStorage.getItem('users')===null){
//     users = [];
//   }
//   else{
//     users = JSON.parse(localStorage.getItem('users'));
//   }

//   users.forEach(function(dbuser,index){
//     if(dbuser.firstName+' '+dbuser.lastName===user.value){
//       users.splice(index, 1);
//     }
//   });

//   localStorage.setItem('users',JSON.stringify(users));
// }

// users = JSON.parse(localStorage.getItem('users'));

// console.log(users[1]);



