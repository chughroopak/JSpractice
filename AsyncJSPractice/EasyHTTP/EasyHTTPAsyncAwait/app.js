const http = new EasyHTTP();

// //Get users
// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err));

//user data

const data = {
  name: 'JOHN DOE',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
}

//CreatePOST
// http.post('https://jsonplaceholder.typicode.com/users',data)
// .then(message => console.log(message))
// .catch(err => console.log(err));

//PUT
// http.put('https://jsonplaceholder.typicode.com/users/1',data)
// .then(message => console.log(message))
// .catch(err => console.log(err));

//DELETE
http.delete('https://jsonplaceholder.typicode.com/users/1')
.then(data => console.log(data))
.catch(err => console.log(err));