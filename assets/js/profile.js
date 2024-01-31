document.addEventListener("DOMContentLoaded", function() {
    // Obtener el valor de "id" del objeto en Local Storage
    const userId = "1b09";  /*localStorage.getItem('id');*/

    // solicitud Fetch para obtener los datos de "clientes.json"
    fetch('./data/clientes.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('No se pudo cargar el archivo JSON.');
        }
        return response.json();
    })
    .then(data => {
        // Buscar el objeto en el JSON que coincida con el "id" recuperado
        const user = data.users.find(user => user.id === userId);
        if (user) {
            // Capturar la información requerida del objeto encontrado
            const firstName = user.first_name;
            const lastName = user.last_name;
            /*const email = user.email;
            const country = user.country;
            const state = user.state;
            const city = user.city;*/

            
            document.getElementById('first_name').textContent = firstName;
            document.getElementById('last_name').textContent = lastName;
           /* document.getElementById('email').textContent = email;
            document.getElementById('country').textContent = country;
            document.getElementById('state').textContent = state;
            document.getElementById('city').textContent = city;*/
        } else {
            console.error('No se encontró un usuario con el ID proporcionado.');
        }
    })
    .catch(error => {
        console.error('Se produjo un error al obtener los datos del archivo JSON:', error);
    });
});


let btnPedirCredito = document.getElementById('btnPedirCredito')

fetch('http://localhost:3000/users')
    .then (response => response.json())
    .then (() =>{
        let numberId = document.getElementById('idUser')
        let id = localStorage.getItem('numberDocument')
        numberId.value = id;
    })
        
