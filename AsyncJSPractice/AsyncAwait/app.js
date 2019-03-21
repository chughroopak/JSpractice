// async function myFunc(){

//   const promise  = new Promise((resolve, reject)=> {
//     setTimeout(()=>resolve('Hello'), 1000);
//   });

//   const error = false;
//   if(!error){
    
//   const res = await promise;
//   return res;
//   } else {
//     await Promise.reject(new Error('Something Went Wrong'));
//   }
// }



// myFunc().then(res => console.log(res))
// .catch(err => console.log(err));

async function getUsers(){

  //await response from fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //proceed once its resolved
  const data = await response.json();

  //only proceed if resolved
  return data;
}

getUsers().then(users => console.log(users));
