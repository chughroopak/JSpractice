//Normal function
// const sayHello = function(){
//   console.log("Hello");
// }


//Normal arrow function
// const sayHello = () => {
//   console.log("Hello");
// }


//One Line function doesnot need braces
// const sayHello = () => console.log('hello');
// sayHello();

//one line return
// const sayHello = () => 'Hello';

// //return object 
// const sayHello = () => ({msg:'Hello'});

// console.log(sayHello());

//Single Params dont need parenthesis
// const sayHello = name => {console.log(`Hello ${name}`)};
// sayHello('Brad');


//Multiple params need parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);
// sayHello('Roopak','Chugh');

const users = ['Nathan', 'John', 'William'];

// Simple MAP function

// const nameLengths = users.map(function(name){
//   return name.length;
// });

// console.log(nameLengths);

// //shorter method
// const nameLengths = users.map((name) => {
//   return name.length;
// });

// console.log(nameLengths);

//shortest method
const nameLengths = users.map(name => name.length);

console.log(nameLengths);