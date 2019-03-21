document.getElementById('button1').addEventListener('click',getText);
document.getElementById('button2').addEventListener('click',getJSON);
document.getElementById('button3').addEventListener('click',getExternalJSON);

//get local text data
function getText(){
  fetch('test.txt')
  .then(function(res){
    return(res.text());
  })
  .then(function(data){
    console.log(data);
    document.getElementById('output').innerHTML=data;
  })
  .catch(function(error){
    console.log(error);
  });
}

//get json local data
function getJSON(){
  fetch('posts.json')
  .then(function(res){
    return(res.json());
  })
  .then(function(data){
    console.log(data);
    const ul = document.createElement('ul');
    data.forEach(function(post){
      const li = document.createElement('li');
      li.innerHTML=`<b>${post.title}: </b>${post.Body}`;
      ul.append(li);
    });
    document.getElementById('output').append(ul);
  })
  .catch(function(error){
    console.log(error);
  });
}

//get json API data--github users
function getExternalJSON(){
  fetch('https://api.github.com/users')
  .then(function(res){
    return(res.json());
  })
  .then(function(data){
    console.log(data);
    const ul = document.createElement('ul');
    data.forEach(function(user){
      const li = document.createElement('li');
      li.innerHTML=`<b>${user.login}: </b><a href="${user.html_url}">Open Github</a>`;
      ul.append(li);
    });
    document.getElementById('output').append(ul);
  })
  .catch(function(error){
    console.log(error);
  });
}