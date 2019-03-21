const http = new easyHTTP();


// //GET REQUEST
// http.get('https://jsonplaceholder.typicode.com/posts/1',function(error, message){
//   if(error){
//     console.log(error);
//   }
//   else{
//     console.log(message);
//   }
// });


//DATA
const data = {
  title: 'custom post',
  body: 'this is a custom post'
};


// //POST Request
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log(post);
//   }
// });

// //Update Post -- PUT request
// http.put('https://jsonplaceholder.typicode.com/posts/1',data,function(err,post){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log(post);
//   }
// });

//DELETE REQUEST
http.delete('https://jsonplaceholder.typicode.com/posts/1',function(error, message){
  if(error){
    console.log(error);
  }
  else{
    console.log(message);
  }
});