const user = {email:'jdoe@gmail.com'};

// BASIC
try{
  //PRODUCE A REFERENCE ERROR
  // myfunction();

  //PRODUCE A TYPE ERROR
  // null.myfunction();

  //SYNTAX ERROR
  // eval('Hello World');

  //WILL PRODUCE A URI ERROR
  // decodeURIComponent('%');


  if(!user.name){
    throw new SyntaxError('User has no name');
  }
}
catch(e){
  //COMPLETE ERROR LOGGED
  // console.log(e);

  //CUSTOM MESSAGE
  // console.log(`${e.name}: ITS NULL STUPID!`);
  console.log(`User error: ${e.message}`);

  //ONLY MESSAGE
  // console.log(e.message);

  //ONLY TYPE
  // console.log(e.name);
  // console.log(e instanceof ReferenceError);
} finally{
  console.log('Finally runs regardless of result....');
}

console.log('Program continues...');