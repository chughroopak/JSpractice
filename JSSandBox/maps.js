//MAPS ARE KEY VALUE PAIRS- CAN USE ANY TYPE AS A KEY OR A VALUE

const map1 = new Map();

//SET KEYS

const key1 = 'some string',
      key2 = {},
      key3 = function(){};


//set map values by keys
map1.set(key1, 'Value of key1');
map1.set(key2,'Value of key2');
map1.set(key3, 'Value of Key3');

//GET VALUES BY KEY
console.log(map1.get(key1), map1.get(key2),map1.get(key3));

//Count values
console.log(map1.size);

//ITERATING MAPS

//Loop using for...of to get key and values
// for(let[key,value] of map1){
//   console.log(`${key} = ${value}`);
// }

//Iterate keys only
// for(let key of map1.keys()){
//   console.log(key);
// }

//Iterate keys only
// for(let value of map1.values()){
//   console.log(value);
// }

//loop with forEach

// map1.forEach(function(value, key){
//   console.log(`${key} = ${value}`);
// });

//CONVERT TO ARRAYS
//Create an array of the key value pairs
const keyValArr = Array.from(map1);
console.log(keyValArr);

const valArr = Array.from(map1.values());
console.log(valArr);

const keyArr = Array.from(map1.keys());
console.log(keyArr);

