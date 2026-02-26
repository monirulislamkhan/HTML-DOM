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

async function getUser(id) {
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
getUser(9);
