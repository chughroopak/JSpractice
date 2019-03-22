// //ITERATOR EXAMPLE
// function nameIterator(names){
//   let nextIndex = 0;
//   return {
//     next: function(){
//       return nextIndex < names.length?
//       { value: names[nextIndex++], done: false} : {done: true};
//     }
//   }
// }

// //CREATE AN ARRAY OF NAMES
// const namesArr = ['Jack', 'Jill', 'John'];

// const names = nameIterator(namesArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);

//GENERATORS EXAMPLES function* tells JS that it is a generator
function* sayNames(){
  yield 'Jack';
  yield 'Jill';
  yield 'John';
} 

const name = sayNames();

console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);

//ID Creator
function* createIds(){
  let index = 0;
  while(true){
    yield index++;
  }
}

const gen = createIds();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

