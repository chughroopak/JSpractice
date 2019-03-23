//BASIC Structure
//MODULE PATTERN

// (function(){
//   //DECLARE PRIVATE VAR AND FUNCTIONS

//   return {

//   }
// })();

// const UICtrl = (function(){
//   let text = 'Hello World';

//   const changeText = function(){
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   }

//   return{
//     callChangeText: function(){
//       changeText();
//       console.log(text);
//     }
//   }
// })();

// UICtrl.callChangeText();
// // UICtrl.changeText();

//REVEALING MODULE PATTERN

// const ItemCtrl = (function(){
//   let data = []; //_data can be used to depict a private variable

//   function add(item){
//     data.push(item);
//     console.log('Item Added.....');
//   }

//   function get(id){
//     return data.find(item =>{
//       return item.id === id;
//     });
//   }


//   return{
//     add:add,
//     get:get
//   }
// })();

// ItemCtrl.add({id: 1, name:'John'});
// ItemCtrl.add({id: 2, name:'Mark'});
// console.log(ItemCtrl.get(1));
// console.log(ItemCtrl.get(2));


//SINGLETON PATTERNS

// const Singleton = (function(){
//   let instance;
//   function createInstance(){
//     const object = new Object({name:'Brad'});
//     return object;
//   }

//   return {
//     getInstance: function(){
//       if(!instance){
//         instance = createInstance();
//       }
//       return instance;
//     }
//   }
// })();

// const InstanceA = Singleton.getInstance();
// const InstanceB = Singleton.getInstance();
// // console.log(InstanceA);
// console.log(InstanceA === InstanceB);


//FACTORY PATTERNS

// function MemberFactory(){
//   this.createMember = function(name, type){
//     let member;

//     if(type === 'simple'){
//       member = new  SimpleMembership(name);
//     } else if(type == 'standard'){
//       member = new StandardMembership(name);
//     } else if(type === 'super'){
//       member = new SuperMembership(name);
//     }

//     member.type = type;
//     member.define = function(){
//       console.log(`${this.name} (${this.type}): ${this.cost}`);
//     }

//     return member;
//   }
// }

// const SimpleMembership = function(name){
//   this.name = name;
//   this.cost = '$5';
// }

// const StandardMembership = function(name){
//   this.name = name;
//   this.cost = '$15';
// }

// const SuperMembership = function(name){
//   this.name = name;
//   this.cost = '$25';
// }

// const members = [];

// const factory = new MemberFactory();

// members.push(factory.createMember(`John Doe`, 'simple'));
// members.push(factory.createMember(`Mary Johnson`, 'standard'));
// members.push(factory.createMember(`Mark Foster`, 'super'));
// members.push(factory.createMember(`Dan Brown`, 'simple'));

// console.log(members);

// members.forEach(function(member){
//   member.define();
// });



//OBSERVER PATTERNS ES5

// function EventObserver(){
//   this.observers = [];
// }
//   EventObserver.prototype = {

//     subscribe: function(fn){
//       this.observers.push(fn);
//       console.log(`You are now subscribed to ${fn.name}`);
//     },
//     unsubscribe: function(fn){
//       // Filter out from the list whatever matches the callback function . If there is no match, the call back gets to stay on the list. The filter returns a new list and reassigns the list of observers.

//       this.observers = this.observers.filter(function(item){
//         if(item !== fn){
//           return item;
//         }
//       });

//       console.log(`you are now unsubscribed from ${fn.name}`);
//     },
//     fire:  function(){
//       this.observers.forEach(function(item){
//         item.call();
//       });
//     }
// }

// const click = new EventObserver();


// document.querySelector('.sub-ms').addEventListener('click', function(){
//   click.subscribe(getCurMilliseconds);
// });
// document.querySelector('.unsub-ms').addEventListener('click', function(){
//   click.unsubscribe(getCurMilliseconds);
// });

// document.querySelector('.sub-s').addEventListener('click', function(){
//   click.subscribe(getCurSeconds);
// });
// document.querySelector('.unsub-s').addEventListener('click', function(){
//   click.unsubscribe(getCurSeconds);
// });

// document.querySelector('.fire').addEventListener('click', function(){
//   click.fire();
// });

// // Click handler;
// const getCurMilliseconds = () =>{
//   console.log(`current milliseconds: ${new Date().getMilliseconds()}`);
// }

// const getCurSeconds = () =>{
//   console.log(`current seconds: ${new Date().getSeconds()}`);
// }


//ES6 OBSERVER PATTERNS

// class EventObserver {
//   constructor() {
//     this.observers = [];
//   }
//   subscribe(fn) {
//     this.observers.push(fn);
//     console.log(`You are now subscribed to ${fn.name}`);
//   }
//   unsubscribe(fn) {
//     // Filter out from the list whatever matches the callback function . If there is no match, the call back gets to stay on the list. The filter returns a new list and reassigns the list of observers.

//     this.observers = this.observers.filter(function (item) {
//       if (item !== fn) {
//         return item;
//       }
//     });

//     console.log(`you are now unsubscribed from ${fn.name}`);
//   }
//   fire() {
//     this.observers.forEach(function (item) {
//       item.call();
//     });
//   }
// }

// const click = new EventObserver();

// document.querySelector('.sub-ms').addEventListener('click', function () {
//   click.subscribe(getCurMilliseconds);
// });
// document.querySelector('.unsub-ms').addEventListener('click', function () {
//   click.unsubscribe(getCurMilliseconds);
// });

// document.querySelector('.sub-s').addEventListener('click', function () {
//   click.subscribe(getCurSeconds);
// });
// document.querySelector('.unsub-s').addEventListener('click', function () {
//   click.unsubscribe(getCurSeconds);
// });

// document.querySelector('.fire').addEventListener('click', function () {
//   click.fire();
// });

// // Click handler;
// const getCurMilliseconds = () => {
//   console.log(`current milliseconds: ${new Date().getMilliseconds()}`);
// }

// const getCurSeconds = () => {
//   console.log(`current seconds: ${new Date().getSeconds()}`);
// }


//MEDIATOR PATTERNS

const User = function(name){
  this.name = name;
  this.chatroom = null;
}

User.prototype ={
  send: function(message, to){
    this.chatroom.send(message, this, to);
  },
  recieve: function(message, from){
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

const Chatroom = function(){
  let users = {}; //list of users

  return{
    register: function(user){
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function(message, from, to){
      if(to){
        //Single user message
        to.recieve(message,from);

      } else {
        //Broadcast message
        for(key in users){
          if(users[key] != from){
            users[key].recieve(message,from);
          }
        }

      }
    }
  }
}


const brad = new User('Brad');
const jeff = new User('Jeff');
const sarah = new User('Sarah');

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sarah);

brad.send('Hello Jeff',jeff);
brad.send('Hello Brad, you are the best dev ever!',brad);
jeff.send('Hello everyone');


