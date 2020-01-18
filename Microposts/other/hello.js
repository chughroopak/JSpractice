// const getData = async (url) => {
//   const response = await fetch(url);
//   const result = await response.json();
//   console.log(result);
// };

// getData('https://jsonplaceholder.typicode.com/posts');

//this is CommonJS systax
const person1 = require('./MyModule1');
console.log(person1);


//ES2015 modules

// import { person, sayHello } from './MyModule2';
// import * as mod from './MyModule2';
import greeting from './MyModule2';
// console.log(mod.person);
// console.log(mod.sayHello());
console.log(greeting);
