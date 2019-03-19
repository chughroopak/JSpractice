Object.prototype

Person constructor

function Person(firstName,lastName, dob){
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function(){
  //   const diff = date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() -1970);
  // }
  
}

Person.prototype.calculateAge = function(){
  const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() -1970);
}

Person.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`
}

Person.prototype.getsMarried = function(newLastName){
  this.lastName = newLastName
}

const john = new Person('John','Doe', 'Aug 12 1990');
const mary = new Person('Mary', 'johnson', '1990-8-12');

console.log(john);

console.log(john.calculateAge());

