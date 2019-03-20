document.getElementById('get-data').addEventListener('click', loadData);

function loadData(){
  const xhr = new XMLHttpRequest();

  //OPEN
  xhr.open('GET','data.txt',true);

  xhr.onload = function(){
    if(this.status=== 200){
      console.log(this.responseText);
      document.getElementById('output').innerHTML=`<h1>${this.responseText}</h1>`
    }
  }

  //Optional - used for spinners/loaders

  xhr.onprogress = function(){
    console.log('READYSTATE', xhr.readyState);
  }

  xhr.onerror = function(){
    console.log('request error');
  }
  xhr.send();

  //HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"


  //Ready State Values
  //0: request not initialized
  //1: server connection established
  //2: request recieved
  //3: processing request
  //4: request finished and response is ready

}