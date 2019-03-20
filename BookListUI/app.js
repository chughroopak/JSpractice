//Book constructor

function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//UI Constructor
function UI(){
}

UI.prototype.addbookToList = function(book){
  const list = document.getElementById('book-list');
  const row = document.createElement('tr');
  //Insert cols

  row.innerHTML= `
  <td>
  ${book.title}
  </td>
  <td>
  ${book.author}
  </td>
  <td>
  ${book.isbn}
  </td>
  <td>
  <a href="#" class="delete">X</a></td>
  </td>`
  console.log(row);
  list.appendChild(row);
}

UI.prototype.clearFields = function(){
  document.getElementById('title').value="";
  document.getElementById('author').value="";
  document.getElementById('isbn').value="";
}

UI.prototype.showAlert = function(message, className){
  const div = document.createElement('div');
  div.className= `alert ${className}`;

  div.appendChild(document.createTextNode(message));

  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');
  container.insertBefore(div, form);

  setTimeout(function(){
    document.querySelector('.alert').remove();
  },3000);
}

UI.prototype.deleteBook = function(target){
  if(target.className === "delete"){
    target.parentElement.parentElement.remove();
  }
}


document.getElementById('book-list').addEventListener('click',function(e){
  const ui = new UI();

  ui.deleteBook(e.target);

  ui.showAlert('Book Removed!', 'success');
  e.preventDefault();
});

document.getElementById('book-form').addEventListener('submit', function(e){
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

  const book = new Book(title, author, isbn);
  
  // Instantiate UI
  const ui = new UI();
  
  //Validate
  if(title === '' || author === '' || isbn === ''){
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    //Add book to list
    ui.addbookToList(book);
    ui.showAlert('Book Added!', 'success');
    ui.clearFields();
  }
  e.preventDefault();
});