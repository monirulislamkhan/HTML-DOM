// let x;
// Old javascript(before ES6 2015)
// its scope function
// Can Reassign and Redecleare
// var a = 10;
// a = 1;
// var a = 30;
// console.log(a);

//  Block scope let
// can Reassign
// Can't Redeclear

// let b = 20;
// b = 30;
// let b = 35; // can't redeclear
// console.log(b);

// Const
// Can't Reassign
// Can't Redeclear
// Its Block scope
// const c = 40;
// c = 40; // Can't Reassign
// const c = 50; // Can't Redeclear

// Const not value fixed
// const reference is fixed
// const user = { name: 'Monirul' };
// user.name = "Raju"
// console.log(user);
/* var name = 'Dubai housing';
var age = 10;
console.log(name);
var fruit = 'Apple';
var fruit = 'banana';
console.log(fruit); */
/* if (true) {
  var d = 10;
}
console.log(d);
console.log(car);
var car = 'Car name'; */
/* let score = 0;
score = 10;
score = 20;
console.log(score); */
// Cannot be redeclared
/* let city = 'Delhi';
let city = 'Kolkata'; */
// Block scope
/* if (true) {
  let y = 5;
  console.log(y);
}
console.log(y); */

// Create a variable for your age that can change next year
// Create a variable for your birth year that never changes
// Write the code here

/* let age = 22;
age++;
const birthYear = 2004;
console.log(age);
console.log(birthYear); */

/* for (let i = 5; i > 0; i--) {
  console.log(i);
}
console.log(i); */

/* const colors = ['red', 'blue'];
colors.push('Dubai', 'Ras Al Khaimah');
colors.unshift('India');

console.log(colors); */
/* const person = {
  name: 'Moni',
  age: 38,
  city: 'Kolkata',
};
person.name = 'Khan';

console.log(person); */
/* console.log(a);
console.log(b);
console.log(c);
var a = 10;
let b = 20;
const c = 30; */

/* function checkTDZ() {
  console.log(x);
  let x = 10;
  console.log(x);
}
checkTDZ(); */

// const tableValue = 3;
for (var i = 1; i <= 7; i++) {
  /* setTimeout(function () {
    console.log(i);
    // console.log(`${tableValue} X ${i} = ${tableValue * i}`);
  }, i * 1000); */
  // IIFE Immediately Invoked function expression
  /* (function (i) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  })(i); */
}
/* let infinity = -Infinity;
console.log(infinity, typeof infinity); */

/* const arr1 = [1,2,3]
const arr2 = arr1;
arr1.push(4)


console.log(arr1);
console.log(arr2); */

/* function changeArray(arr) {
  arr.push(999);
}
let numbers = [1, 2, 3];
changeArray(numbers);
console.log(numbers); */

/* let original = [1, 2, 3, 4];
let copy = [...original];
copy.push(5);
console.log(original);
console.log(copy); */
/* let person1 = { name: 'Monirul', age: 38 };
let person2 = { ...person1 };
person2.age = 29;
person2.city = 'Kolkata';

console.log(person1);
console.log(person2); */

/* let original = {
  name: 'Monirul',
  age: 38,
  address: {
    city: 'Kolkata',
  },
};
let copy = JSON.parse(JSON.stringify(original));
copy.address.city = 'Dubai';
console.log(original);
console.log(copy); */

/* let obj1 = { value: 10 };
let obj2 = obj1;
obj1.value = 20;
let obj3 = obj1;
console.log(obj1);
console.log(obj2);
console.log(obj3); */

// console.log(arr1 === arr2);

/* let a = { x: 10 };
let b = a;
let c = { x: 10 };
console.log(a === b);
console.log(a === c); */
let original = [1, 2, 3];
let copy = [...original];
copy.push(4);
console.log(copy);
console.log(original);
