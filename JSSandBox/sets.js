//SETS-- STORES UNIQUE VALUES OF ANY TYPE

const set1 = new Set();

//Add values to set
set1.add(100);
set1.add('a string');
set1.add({name: 'John'});
set1.add(true);
set1.add(100);

console.log(set1);

console.log(set1.size);
console.log(100);
console.log(set1.has(50+50));
console.log(set1.has({name:'John'})); // Returns false because of object reference object and it is stored in heap instead of stack as per the case of primitive data types

set1.delete(100);
console.log(set1);


//ITERATING THROUGH SETS
 
for(let item of set1){
  console.log(item);
}

//forEach loop
set1.forEach((value)=>{
 console.log(value);
})

const setArr = Array.from(set1);
console.log(setArr);