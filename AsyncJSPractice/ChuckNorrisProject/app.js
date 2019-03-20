document.querySelector('.get-jokes').addEventListener('click',getJokes);


function getJokes(e){
  const number = document.getElementById('number').value;
  console.log(number);
  const xhr = new XMLHttpRequest();
  xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);

  xhr.onload = function(){
    if(this.status===200){
      const response = JSON.parse(this.responseText);
      const list = document.querySelector('.jokes');
      list.innerHTML="";
      if(response.type === "success"){
        response.value.forEach(function(element){
          list.innerHTML+=`<li>${element.joke}</li>`
        });
      }
    }
  }
  xhr.send();
  e.preventDefault();
}