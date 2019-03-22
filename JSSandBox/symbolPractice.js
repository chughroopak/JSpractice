// //create a symbol
// const sym1 = Symbol(); //it is a primitive type and not object
// const sym2 = Symbol('sym2');

// //console.log(typeof sym2);

// console.log(Symbol('123') === Symbol('123'));
// console.log(`Hello ${sym1.toString()}`);


//Unique object keys

const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};
myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

// console.log(myObj[KEY1]);
// console.log(myObj[KEY2]);

// //SYMBOLS ARE NOT ENUMERABLE IN FOR.. IN..
// for(let i in myObj){
//   console.log(`${i}: ${myObj[i]}`);
// }

//SYMBOLS ARE IGNORED BY JSON.stringify
console.log(JSON.stringify({key: 'prop'}));
console.log(JSON.stringify({[Symbol('sym1')]:'prop'}));