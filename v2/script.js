/* let a = { x: 10 };
let b = a;
let c = { x: 10 };
console.log(a === b);
console.log(a === c); */

/* 
let original = [1, 2, 3];
let copy = [...original];
copy.push(4);

console.log(original === copy);
console.log(copy);
console.log(original); */

/* // Shallow copy problem
const person = {
  name: 'Monirul',
  address: {
    city: 'Delhi',
  },
};
const shallowCopy = { ...person };
shallowCopy.address.city = 'Mumbai';
const deepCopy = JSON.parse(JSON.stringify(person));

deepCopy.address.city = 'Kolkata';

console.log(shallowCopy);
// console.log(person);
console.log(deepCopy); */

/* let userName = 'monirul';
let passWord = '12345';


if(userName === 'monirul' && passWord === '12345') {
  console.log("Login successful");
} else{
  console.log('Please enter correct password');
}
 */

/* let num = 8;
if (num % 2 === 0) {
  console.log('Numer is Even');
} else {
  console.log('Num is Odd');
} */

//
/* let marks = 65;
if (marks >= 90) {
  console.log('Grade  A+');
} else if (marks >= 80) {
  console.log('Grade A');
} else if (marks >= 70) {
  console.log('Grade B');
} else if (marks >= 60) {
  console.log('Grade C');
} else {
  console.log('Grade D');
} */
// Nested if-else login with role check
let isLoggedIn = false;
let role = 'admin';

if (isLoggedIn) {
  if (role === 'admin') {
    console.log('Welcome Admin');
  } else if (role === 'user') {
    console.log('Welcome User');
  } else {
    console.log('Unknown Role');
  }
} else {
  console.log('Please log in');
}

// console.log('hello');
// ✅ Sahi tarika — response.ok check karo
/* async function getUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/19');

    if (!response.ok) {
      // Manually throw karo
      throw new Error(`Server Error: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Error pakda:', error.message); // "Server Error: 404"
  }
}

getUser(); */

/* async function getUser(id) {
  try {
    const dataUrl = `https://jsonplaceholder.typicode.com/users/${id}`;
    const response = await fetch(dataUrl);
    if (!response.ok) {
      throw new Error(`Server Error: ${response.status}`);
    }
    const data = await response.json();
    const container = document.getElementById('users-container');
    container.innerHTML = `<h3>${data.name}</h3><p>Email: ${data.email}</p>`;
  } catch (error) {
    console.log(error);
  }
}
getUser(9); */
