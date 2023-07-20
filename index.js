async function fetchUsername() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        const username = data[0].username;

        const h1Element = document.getElementById('name');
        h1Element.textContent = username;
    } catch (error) {
        console.error('Error fetching data:', error);
        const h1Element = document.getElementById('name');
        h1Element.textContent = 'Error fetching data';
    }
}

fetchUsername();
