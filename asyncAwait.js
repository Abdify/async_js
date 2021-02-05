fetch('https://jsonplaceholder.typicode.com/users')
.then( response => response.json())
.then(data => {
    displayData(data);
});


async function loadData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
}

loadData().then(data => {
    displayData(data);
});



function displayData(data) {
    const list = document.getElementById('list');
    for (let i = 0; i < data.length; i++) {
        const user = data[i];
        const li = document.createElement('li');
        li.innerText = user.name;
        list.appendChild(li);
    }
}

